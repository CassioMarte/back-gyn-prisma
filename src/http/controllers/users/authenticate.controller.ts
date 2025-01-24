import { InvalidCredetionsError } from "@/errors/invalidCredentionsError";
import { makeAuthenticateUseCase } from "@/services/factory/make-authenticate-use-service";
import { authnticationSchema } from "@/vallidationSchema/authenticateSchema";
import { Request, Response } from "express";


export const authenticateController = (req:Request, res:Response) =>{
  const {email, password} = authnticationSchema.parse(req.body) 

  const authenticateUseCase =  makeAuthenticateUseCase()

  try {
    const user = authenticateUseCase.login({email, password})
    return res.status(200)
  } catch (error) {
    if(error instanceof InvalidCredetionsError)
   return res.status(400).json({message: error.message})    
  }
 throw new Error();
 
}