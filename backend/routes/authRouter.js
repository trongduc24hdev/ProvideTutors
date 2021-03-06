import { Router } from "express";
import { authController } from "../controllers";
import { authMiddleware } from "../middlewares";

const { loginMiddleware, registerMiddleware, jwtMidleware } = authMiddleware;

const {
    register,
    login,
    forgotPassword,
    confirmCode,
    changePassword,
    changeNewPassword,
} = authController;

export const authRouter = Router();

authRouter.route("/v1/api/auth/register").post(registerMiddleware, register);

authRouter.route("/v1/api/auth/login").post(loginMiddleware, login);

authRouter.route("/v1/api/auth/forgot-password").post(forgotPassword);

authRouter.route("/v1/api/auth/confirm-code").post(confirmCode);

authRouter.route("/v1/api/auth/change-password").post(changePassword);

authRouter.route("/v1/api/auth/change-new-password").post(jwtMidleware, changeNewPassword);
