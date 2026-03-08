import prisma from "../utils/db.js";

export default async function roomImageSeed() {
  await prisma.roomImage.createMany({
    data: [
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187346/neatlyhotelimage/kz1cemdmr6cnnawqcixh.png",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187342/neatlyhotelimage/urunrgwmdk4egn4ngk5f.jpg",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187341/neatlyhotelimage/twjtydxu6zkeyguvufnu.jpg",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187345/neatlyhotelimage/cwwsipbxipmlfbglb7af.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187339/neatlyhotelimage/psd9lfozev5xviegij9f.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187339/neatlyhotelimage/pl24y5amijjb3qriddbd.jpg",
      },
    ],
    skipDuplicates: true,
  });
}
