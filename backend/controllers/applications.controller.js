import { application, response } from "express";
import { Application } from "../models/applications.model.js";
import { Job } from "../models/job.model.js";
import { login } from "./user.controller.js"

export const applyJob = async(req,res) =>{
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if(!jobId){
      return res.status(400).json({
        message:"Job id is required",
        success:false
      })
    };
    //check if the user has alreadt applied for the job
    const existingApplication = await Application.findOne({job:jobId, applicant:userId});

    if(existingApplication){
      return res.status(400).json({
        message:"you have already applied",
        success:false
      })
    };

    //check if the job exist or not
    const job = await Job.findById(jobId);
    if(!job){
      return res.status(404).json({
        message:"job not found",
        success:false
      })
    };

    //create a new applications
    const newApplication = await Application.create({
      job:jobId,
      applicant:userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message:"job apllied successfully",
      success:true
    })
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req,res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
      path:"job",
      options:{sort:{createdAt:-1}},
      populate:{
        path:"company",
        options:{sort:{createdAt:-1}}
      }
    });

    if(!application){
      return res.status(404).json({
        message:"no applications",
        success:false
      });

    };

    return res.status(200).json({
      application,
      success:true
    })
  } catch (error) {
    console.log(error);
  }
}
//admin serch karega kitne user ne appliya kiya 
export const getApplicants = async(req,res) =>{
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:"applications",
      options:{sort:{createdAt:-1}},
      populate:{
        path:"applicant"
      }
    });
    if(!job){
      return res.status(404).json({
        message:"job not found",
        message:false
      })
    };

    return res.status(200).json({
      job,
      success:true
    });

  } catch (error) {
    console.log(error);
  }
}

export const updateStatus = async (req,res) => {
  try {
    const {status} = req.body;
    const applicationId = req.params.id;
    if(!status){
      return res.status(400).json({
        message:"status is required",
        message:false
      })
    };

    // find application by application id

    const application = await Application.findOne({_id:applicationId});
    if(!application){
      return res.status(404).json({
        message:"application not found",
        success:false
      })
    };

    //update status

    application.status = status.toLowerCase();
    await application.save();
    
    return  res.status(200).json({
      message:"Statues updated successfully",
      success:true
    })
  } catch (error) {
    console.log(error);
  }
}