import { Schema, model } from "mongoose";


const tutorSchema = new Schema({

    email: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    birthday: {
        type: Date
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    role: {
        type: Number,
        default: 1
    },
    picture: {
        type: String
    },
    review: [{
        studentId: {
            type: Schema.Types.ObjectId,
            ref: "student"
        },
        fullname: {
            type: String
        },
        rating: {
            type: Number
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        time: {
            type: Date,
            default: new Date()
        }
    }]
});

export const Tutor = model("tutor", tutorSchema);