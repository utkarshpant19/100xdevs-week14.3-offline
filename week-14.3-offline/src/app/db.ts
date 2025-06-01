// lib/prisma.ts

import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

console.log("In Db.ts");

const getPrismaClient = () => {
  console.log("Prisma Client Instantiated");

  return new PrismaClient();
};

const prisma = globalForPrisma.prisma || getPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
