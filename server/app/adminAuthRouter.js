import { Router } from "express";
import prisma from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminAuthRouter = Router();

// admin register function
adminAuthRouter.post("/register", async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Username:", req.body.username);
  console.log("Password:", req.body.password);
  console.log("Email:", req.body.email);
  
  const { username, password, email, firstName, lastName, dateOfBirth, phoneNumber } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "Username, password, and email are required" });
  }

  const admin = {
    username,
    password,
    email,
    firstName,
    lastName,
    dateOfBirth,
    phoneNumber: Number(phoneNumber),
  };

  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  admin.password = await bcrypt.hash(admin.password, salt);

  await prisma.agent.create({
    data: {
      username: admin.username,
      password: admin.password,
      email: admin.email,
      agentProfile: {
        create: {
          firstName: admin.firstName,
          lastName: admin.lastName,
          dateOfBirth: admin.dateOfBirth,
          phoneNumber: admin.phoneNumber,
        },
      },
    },
  })
  .then(() => {
    return res.json({
      message: "admin has been created successfully",
    });
  })
  .catch((error) => {
    console.error("Prisma Error:", error);
    return res.status(500).json({ 
      message: "Error creating admin",
      error: error.message,
      code: error.code 
    });
  });
});

//admin login function
adminAuthRouter.post("/login", async (req, res) => {
  const adminLogin = { ...req.body };
  let admin = null;
  console.log(adminLogin);

  if (adminLogin.username.includes("@")) {
    admin = await prisma.agent.findUnique({
      where: {
        email: adminLogin.username,
      },
      include: {
        agentProfile: true,
      },
    });
  } else {
    admin = await prisma.agent.findUnique({
      where: {
        username: adminLogin.username,
      },
      include: {
        agentProfile: true,
      },
    });
  }

  if (!admin) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const isValidPassword = await bcrypt.compare(
    adminLogin.password,
    admin.password
  );

  if (!isValidPassword) {
    return res.status(400).json({
      message: "password not valid",
    });
  }

  const token = jwt.sign(
    {
      id: admin.agentId,
      firstName: admin.agentProfile.firstName,
      lastName: admin.agentProfile.lastName,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1800000",
    }
  );

  return res.json({
    message: "login succesfully",
    token,
  });
});

export default adminAuthRouter;