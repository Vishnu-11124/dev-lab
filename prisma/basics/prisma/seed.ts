import prisma from "../config/db.js";

const seed = async () => {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@neon.com",
      },
      {
        name: "John",
        email: "john@neon.com",
      },
    ],
    skipDuplicates: true,
  });
};

seed()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
