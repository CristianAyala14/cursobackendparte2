import mongoose from "mongoose";
const coursesCollection = "Courses";
const coursesSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    teacher:{
        type: String,
        require: true
    },
    //referencia
    students:{
        type:[
            {
                type:mongoose.SchemaTypes.ObjectId,
                ref: "Users"
            }
        ],
        default: []
    }
});
const coursesModel = mongoose.model(coursesCollection,coursesSchema)
export default coursesModel;