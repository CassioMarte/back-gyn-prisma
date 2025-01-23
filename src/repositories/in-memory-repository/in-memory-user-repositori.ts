import { UserRepository } from "@/repositories/user-repository";
import { Prisma, User } from "@prisma/client";

export class inMemoryUserRepository implements UserRepository {
  dataBase: User[] = []; //simula o banco

  async create(data: Prisma.UserCreateInput) {
    const user = {   //simila receber data e colocar em usar
      id: "user-1",
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    };

    this.dataBase.push(user);  // da um push para banco
 
    return user;   // return user 
  }
  async findByEmail(email: string) {
    const userExisting = this.dataBase.find((item) => item.email === email); //faz um find no array que simula o banco

    if (!userExisting) {
      return null;
    }

    return null;
  }
}
