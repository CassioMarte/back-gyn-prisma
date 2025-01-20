import { UserAlreadyExistError } from "@/errors/user-already-exist-error";
import { UserRepository } from "@/repositories/user-repository";
import { genSalt, hash } from "bcryptjs";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserService {
  constructor(private userRepository: UserRepository) {}

  async create({ name, email, password }: RegisterData) {
    const salt = await genSalt(10);
    const password_hash = await hash(password, salt);

    const existing = await this.userRepository.findByEmail(email);

    if (existing) {
      throw new UserAlreadyExistError();
    }

    await this.userRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
