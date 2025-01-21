import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUserService } from "@/services/register.service";
import { compare } from "bcryptjs";
import { describe, expect, it } from "vitest";

describe("Register user Case", () => {
  it("should hash user password upon register", async () => {
    const prismaUserRepository = new PrismaUserRepository();
    const registerUserService = new RegisterUserService(prismaUserRepository);

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
});
