
// this file is just for testing purpose of prisma 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      name: 'Adil',
      email: 'adil@example.com',
    },
  });

  console.log('User created:', user);

  // Find all users
  const users = await prisma.user.findMany();
  console.log('All users:', users);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
