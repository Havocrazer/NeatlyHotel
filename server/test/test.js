import prisma from "../utils/db.js";

async function main() {
  await prisma.room.createMany({
    data: [
      { roomTypeId: 1, statusId: 1, roomNumber: 101 },
      { roomTypeId: 1, statusId: 1, roomNumber: 102 },
      { roomTypeId: 1, statusId: 1, roomNumber: 103 },
      { roomTypeId: 1, statusId: 1, roomNumber: 104 },
      { roomTypeId: 1, statusId: 1, roomNumber: 105 },
      { roomTypeId: 1, statusId: 1, roomNumber: 106 },
      { roomTypeId: 1, statusId: 1, roomNumber: 107 },
      { roomTypeId: 1, statusId: 1, roomNumber: 108 },
      { roomTypeId: 1, statusId: 1, roomNumber: 109 },
      { roomTypeId: 1, statusId: 1, roomNumber: 100 },
      { roomTypeId: 2, statusId: 1, roomNumber: 201 },
      { roomTypeId: 2, statusId: 1, roomNumber: 202 },
      { roomTypeId: 2, statusId: 1, roomNumber: 203 },
      { roomTypeId: 2, statusId: 1, roomNumber: 204 },
      { roomTypeId: 2, statusId: 1, roomNumber: 205 },
      { roomTypeId: 2, statusId: 1, roomNumber: 206 },
      { roomTypeId: 2, statusId: 1, roomNumber: 207 },
      { roomTypeId: 2, statusId: 1, roomNumber: 208 },
      { roomTypeId: 2, statusId: 1, roomNumber: 209 },
      { roomTypeId: 2, statusId: 1, roomNumber: 200 },
      { roomTypeId: 3, statusId: 1, roomNumber: 301 },
      { roomTypeId: 3, statusId: 1, roomNumber: 302 },
      { roomTypeId: 3, statusId: 1, roomNumber: 303 },
      { roomTypeId: 3, statusId: 1, roomNumber: 304 },
      { roomTypeId: 3, statusId: 1, roomNumber: 305 },
      { roomTypeId: 3, statusId: 1, roomNumber: 306 },
      { roomTypeId: 3, statusId: 1, roomNumber: 307 },
      { roomTypeId: 3, statusId: 1, roomNumber: 308 },
      { roomTypeId: 3, statusId: 1, roomNumber: 309 },
      { roomTypeId: 3, statusId: 1, roomNumber: 300 },
      { roomTypeId: 4, statusId: 1, roomNumber: 401 },
      { roomTypeId: 4, statusId: 1, roomNumber: 402 },
      { roomTypeId: 4, statusId: 1, roomNumber: 403 },
      { roomTypeId: 4, statusId: 1, roomNumber: 404 },
      { roomTypeId: 4, statusId: 1, roomNumber: 405 },
      { roomTypeId: 4, statusId: 1, roomNumber: 406 },
      { roomTypeId: 4, statusId: 1, roomNumber: 407 },
      { roomTypeId: 4, statusId: 1, roomNumber: 408 },
      { roomTypeId: 4, statusId: 1, roomNumber: 409 },
      { roomTypeId: 4, statusId: 1, roomNumber: 400 },
      { roomTypeId: 5, statusId: 1, roomNumber: 501 },
      { roomTypeId: 5, statusId: 1, roomNumber: 502 },
      { roomTypeId: 5, statusId: 1, roomNumber: 503 },
      { roomTypeId: 5, statusId: 1, roomNumber: 504 },
      { roomTypeId: 5, statusId: 1, roomNumber: 505 },
      { roomTypeId: 5, statusId: 1, roomNumber: 506 },
      { roomTypeId: 5, statusId: 1, roomNumber: 507 },
      { roomTypeId: 5, statusId: 1, roomNumber: 508 },
      { roomTypeId: 5, statusId: 1, roomNumber: 509 },
      { roomTypeId: 5, statusId: 1, roomNumber: 500 },
      { roomTypeId: 6, statusId: 1, roomNumber: 601 },
      { roomTypeId: 6, statusId: 1, roomNumber: 602 },
      { roomTypeId: 6, statusId: 1, roomNumber: 603 },
      { roomTypeId: 6, statusId: 1, roomNumber: 604 },
      { roomTypeId: 6, statusId: 1, roomNumber: 605 },
      { roomTypeId: 6, statusId: 1, roomNumber: 606 },
      { roomTypeId: 6, statusId: 1, roomNumber: 607 },
      { roomTypeId: 6, statusId: 1, roomNumber: 608 },
      { roomTypeId: 6, statusId: 1, roomNumber: 609 },
      { roomTypeId: 6, statusId: 1, roomNumber: 600 },
    ],
  });
  console.log("Batch insert is completed.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
