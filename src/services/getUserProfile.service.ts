import { ResorceNotFoundError } from "@/errors/resorce-not-found-error";
import { UserRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";

interface UserResponse {
  user: User;
}

export class GetUserProfileService {
  constructor(private userRepository: UserRepository) {}

  async getUserProfile(id: string): Promise<UserResponse> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new ResorceNotFoundError();
    }

    return { user };
  }
}
