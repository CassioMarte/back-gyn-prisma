import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { Authentication } from "@/services/authentication";

export const makeAuthenticateUseCase = () => {
  const userRegister = new PrismaUserRepository();
  const authenticateUseCase = new Authentication(userRegister);

  return authenticateUseCase;
};
