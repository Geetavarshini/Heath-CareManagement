import {Schema,model} from "mongoose";

const doctorSchema=new Schema(
    {
        name:{
            type:String,
            required:[true,"Doctor name is required"]
        },
        specialization:{
            type:String,
            required:[true,"Specialization is required"]
        },
        experience:{
            type:Number,
            required:[true,"Experience is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"]
        },
        qualification: {
            type: String,
            required: true
        },

        hospitalName: {
            type: String,
            default: "Healthcare Hospital"
        },
        consultationFee: {
            type: Number,
        default: 0
        },
        availability: {
            type: [String], 
            default: ["Monday","Tuesday","Wednesday","Thursday","Friday"]
        },
        profileImage: {
            type: String
        }
    },
    {
    timestamps: true
    }
)
export const Doctor = model("Doctor", doctorSchema);