import { RegisterUserService } from "@/services/register.service";
import { registerSchema } from "@/vallidationSchema/registerSchema";
import { Request, Response } from "express";


export const register = async (req: Request, res: Response) => {
  try {
    
    const {name, email, password} = registerSchema.parse(req.body)

    await RegisterUserService( {name, email, password})
   
    return res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    //tratamento de erros
    console.error(error);
  }
};
