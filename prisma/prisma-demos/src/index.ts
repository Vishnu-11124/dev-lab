import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
    
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    throw e;
  });
