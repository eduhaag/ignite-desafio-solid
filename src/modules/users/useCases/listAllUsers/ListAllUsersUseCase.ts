import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkUserAdmin = this.usersRepository.findById(user_id);

    if (!checkUserAdmin) {
      throw new Error("user not find");
    }

    if (!checkUserAdmin.admin) {
      throw new Error("user is not admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
