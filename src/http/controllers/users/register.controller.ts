import { UserAlreadyExistError } from "@/errors/user-already-exist-error";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUserService } from "@/services/register.service";
import { registerSchema } from "@/vallidationSchema/registerSchema";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const userRegister = new PrismaUserRepository();
  const registerUser = new RegisterUserService(userRegister);

  try {
    const { name, email, password } = registerSchema.parse(req.body);

    await registerUser.create({ name, email, password });

    return res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
     if(error instanceof UserAlreadyExistError){
      return res.status(409).send({message: error.message})
     }
     
     return res.status(500).send("Internal server error.")
    //tratamento de erros
    console.error(error);
  }
};
