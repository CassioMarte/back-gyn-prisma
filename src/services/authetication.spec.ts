import { inMemoryUserRepository } from "@/repositories/in-memory-repository/in-memory-user-repositori";
import { RegisterUserService } from "@/services/register.service";
import { User } from "@prisma/client";
import { describe, it } from "vitest";


describe("user deve poder logar", ()=>{
  const database:User[] = []

  it("algo aqui", async()=>{


    const userMemory = new inMemoryUserRepository()
    const useCase = new RegisterUserService(userMemory)

    const {user} = await useCase.create({
      name:'teste',
      email: "tests@tets.com",
      password: "123456"
    }) 

    await this.database.push(user)
  })

})