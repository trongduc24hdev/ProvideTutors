import { Schema, model } from "mongoose";

const scheduleAcceptSchema = new Schema({
    scheduleId: {
        type: Schema.Types.ObjectId,
        ref: "schedule",
    },
    scheduleRegisterId: {
        type: Schema.Types.ObjectId,
        ref: "scheduleregiste",
    },
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: "tutor",
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "student",
    },
    time: [{ type: String }],
});

export const ScheduleAccept = model("scheduleAccept", scheduleAcceptSchema);
