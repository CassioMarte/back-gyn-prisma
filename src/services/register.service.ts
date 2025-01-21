import { UserAlreadyExistError } from "@/errors/user-already-exist-error";
import { UserRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface UserResponse {
  user: User;
}

export class RegisterUserService {
  constructor(private userRepository: UserRepository) {}

  async create({ name, email, password }: RegisterData): Promise<UserResponse> {
    const salt = await genSalt(10);
    const password_hash = await hash(password, salt);

    const existing = await this.userRepository.findByEmail(email);

    if (existing) {
      throw new UserAlreadyExistError();
    }

    const user = await this.userRepository.create({
      name,
      email,
      password_hash,
    });

    return {
      user,
    };
  }
}
