import { UserAlreadyExistError } from "@/errors/user-already-exist-error";
import { inMemoryUserRepository } from "@/repositories/in-memory-repository/in-memory-user-repositori";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUserService } from "@/services/register.service";
import { compare } from "bcryptjs";
import { register } from "module";
import { describe, expect, it } from "vitest";

describe("Register user Case", () => {
  it("should hash user password upon register", async () => {
    const prismaUserRepositorTest= new inMemoryUserRepository(); // ao inves de instanciar o bando de rosma usadms inmemoru
    const registerUserService = new RegisterUserService(prismaUserRepositorTest);

    const { user } = await registerUserService.create({
      name: "john doe",
      email: "john@test.com",
      password: "123456",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not to be avre", async ()=>{
      const prismaUserRepositorTest= new inMemoryUserRepository(); // ao inves de instanciar o bando de rosma usadms inmemoru
      const registerUserService = new RegisterUserService(prismaUserRepositorTest);
  
      const user = await registerUserService.create({
        name: "teste", 
        email,
        password: 'vnrwvnwnvp'
      })

     await expect(()=>{
         registerUserService.create({
          name: "teste", 
          email,
          password: 'vnrwvnwnvp'
        })
  
      }).rejects.toBeInstanceOf(UserAlreadyExistError)
  })

});
