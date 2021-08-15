import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    let user;

    try {
      user = this.createUserUseCase.execute({ email, name });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };
