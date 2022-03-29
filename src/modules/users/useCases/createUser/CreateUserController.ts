import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { email, name } = request.body;
        try {
            const createdUser = this.createUserUseCase.execute({ email, name });
            return response.status(201).json(createdUser);
        } catch (error) {
            return response.status(400).json({
                error: (error as Error).message || "Unexpected error",
            });
        }
    }
}

export { CreateUserController };
