import { CheckIn, Prisma } from "@prisma/client";

export interface CheckInRepository{
  create(data:Prisma.CheckInUncheckedCreateInput):Promise<CheckIn>
}

// obs: pq CheckInUncheckedCreateInput ao inves de checkInCreateInput pq o GymUncheckedCreateInput possui gym_id e user_id

//typagam vem so prisma 