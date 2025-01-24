import { inMemoryUserRepository } from "@/repositories/in-memory-repository/in-memory-user-repositori";
import { RegisterUserService } from "@/services/register.service";
import { User } from "@prisma/client";
import { beforeEach } from "node:test";
import { describe, it } from "vitest";

let userMemory: inMemoryUserRepository;
let useCase: RegisterUserService;

describe("user deve poder logar", () => {
  const database: User[] = [];
  // const userMemory = new inMemoryUserRepository();
  // const useCase = new RegisterUserService(userMemory);

  beforeEach(() => {
    userMemory = new inMemoryUserRepository();
    useCase = new RegisterUserService(userMemory);
  });

  it("algo aqui", async () => {
    const { user } = await useCase.create({
      name: "teste",
      email: "tests@tets.com",
      password: "123456",
    });

    await this.database.push(user);
  });
});
