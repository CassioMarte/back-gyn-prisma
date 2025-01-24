import { CheckInRepository } from "@/repositories/checkIn-repository";
import { CheckIn } from "@prisma/client";

interface CheckInResponse {
  checkIn: CheckIn;
}

interface CheckInRequest {
  user_id: string;
  gym_id: string;
}

class CheckInService {
  constructor(private checkInRepository: CheckInRepository) {}
  async checkIN({ user_id, gym_id }: CheckInRequest): Promise<CheckInResponse> {
    const checkIn = await this.checkInRepository.create({ user_id, gym_id });

    return {
      checkIn,
    };
  }
}


//https://app.rocketseat.com.br/classroom/api-node-js-com-solid/group/implementando-casos-de-uso/lesson/tdd-and-mocking