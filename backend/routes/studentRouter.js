import { Router } from "express";
import { studentController } from "../controllers";

import { authMiddleware } from "../middlewares";
const { jwtMidleware, updateMiddleware } = authMiddleware;

const {
    getInfo,
    updateInfo,
    chooseSchedule,
    listContract,
    listRegister,
    delRegister,
    reviewTutor,
} = studentController;

export const studentRouter = Router();

studentRouter.route("/v1/api/student/info").get(jwtMidleware, getInfo);

studentRouter.route("/v1/api/student/update-info").post(jwtMidleware, updateMiddleware, updateInfo);

studentRouter.route("/v1/api/student/choose-schedule").post(jwtMidleware, chooseSchedule);

studentRouter.route("/v1/api/student/learing-schedule").get(jwtMidleware, listContract);

studentRouter.route("/v1/api/student/list-register").get(jwtMidleware, listRegister);

studentRouter.route("/v1/api/student/del-register/:_id").get(jwtMidleware, delRegister);

studentRouter.route("/v1/api/student/review-tutor").post(jwtMidleware, reviewTutor);
