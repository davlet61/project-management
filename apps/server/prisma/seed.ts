import { PrismaClient } from '@prisma/client';
import { projects, clients } from './data';

const prisma = new PrismaClient();

const main = async () => {
  await Promise.all(
    clients.map(async (c) => await prisma.client.create({ data: c })),
  );
  return Promise.all(
    projects.map(async (p) => await prisma.project.create({ data: p })),
  );
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
