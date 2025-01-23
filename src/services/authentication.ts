import { InvalidCredetionsError } from "@/errors/invalidCredentionsError";
import { UserRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";

interface AuthenticationUseServiceResponse {
  user: User;
}

interface AuthenticationUseServiceRequest {
  email: string;
  password: string;
}

export class Authentication {
  constructor(private UserRepository: UserRepository) {}

  async login({
    email,
    password,
  }: AuthenticationUseServiceRequest): Promise<AuthenticationUseServiceResponse> {
    const user = await this.UserRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredetionsError();
    }

    const doesPasswordMath = await compare(password, user.password_hash);

    if (!doesPasswordMath) {
      throw new InvalidCredetionsError();
    }

    return {
      user,
    };
  }
}
