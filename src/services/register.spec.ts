import { UserAlreadyExistError } from "@/errors/user-already-exist-error";
import { inMemoryUserRepository } from "@/repositories/in-memory-repository/in-memory-user-repositori";
import { RegisterUserService } from "@/services/register.service";
import { compare } from "bcryptjs";
import { beforeEach, describe, expect, it } from "vitest";

//criao variaveis e tipo com o valor que quer colocar
let prismaUserRepositorTest: inMemoryUserRepository;
let registerUserService: RegisterUserService;

describe("Register user Case", () => {
  it("should hash user password upon register", async () => {
    /**
     * instanciando direto forma mais simples mais menos funcional
     * const prismaUserRepositorTest= new inMemoryUserRepository(); // ao inves de instanciar o bando de rosma usadms inmemoru
     * const registerUserService = new RegisterUserService(prismaUserRepositorTest);
     */
     
    // beforeEach sig execute antes de cadas teste então antes de cada teste a conecção sera aberta
    beforeEach(() => {
      prismaUserRepositorTest = new inMemoryUserRepository();
      registerUserService = new RegisterUserService(prismaUserRepositorTest);
    });

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

  it("should not to be avre", async () => {
    const prismaUserRepositorTest = new inMemoryUserRepository(); // ao inves de instanciar o bando de rosma usadms inmemoru
    const registerUserService = new RegisterUserService(
      prismaUserRepositorTest
    );

    const user = await registerUserService.create({
      name: "teste",
      email,
      password: "vnrwvnwnvp",
    });

    await expect(() => {
      registerUserService.create({
        name: "teste",
        email,
        password: "vnrwvnwnvp",
      });
    }).rejects.toBeInstanceOf(UserAlreadyExistError);
  });
});
