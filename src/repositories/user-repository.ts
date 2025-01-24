import { Prisma, User } from "@prisma/client";

//começo contrato
// vou para repositories prisma

export interface UserRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
