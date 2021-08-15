import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let userProfile;

    try {
      userProfile = this.showUserProfileUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }

    return response.json(userProfile);
  }
}

export { ShowUserProfileController };
