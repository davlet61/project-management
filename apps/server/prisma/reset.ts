import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resetDb = async () => {
  await prisma.project.deleteMany({});
  await prisma.client.deleteMany({});
};

resetDb()
  .then(() => console.log('Database has been cleaned'))
  .catch((err) => console.error(err.message));
