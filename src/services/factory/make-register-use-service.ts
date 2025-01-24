import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUserService } from "@/services/register.service";

export const makeregisterUseCase = () => {
  const userRegister = new PrismaUserRepository();
  const registerUser = new RegisterUserService(userRegister);

  return registerUser;
};

/**
 * factory guarda instancciação de class que serão usadas na controller
 */
