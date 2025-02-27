import coursesModel from "../models/courses.js";

export default class Courses{
    constructor(){
        console.log("Manager de coursos con mongo")
    }
    getAll = async()=>{
        let courses = await coursesModel.find().lean().populate("Users"); //lean lo parsea en json para que nuestra vista pueda identificarlo.
        return courses;
    }
    getById = async(id)=>{
        let course = await coursesModel.findOne({_id:id}).populate("Users")
        return course;
    }
    saveCourse = async(course)=>{
        let result = await coursesModel.create(course)
        return result;
    }
    updateCourse = async(id,course)=>{
        delete user._id; //si nos mandan un curso completo le borramos el id
        let result = await coursesModel.updateOne({_id:id},{$set:course})
        return result;
    }
}