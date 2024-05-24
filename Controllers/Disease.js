import DiseaseModel from "../models/Disease.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.ClOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const addDisease = asyncWrapper(async (req, res) => {
     try{
        const uploadImage = await cloudinary.uploader.upload(req.file.path, (err, uploadedImage) => {
            if(err){
              console.log(err.message);
              return res.status(500).json({message: 'error'});
            }
        });
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return next(new BadRequestError(errors.array()[0].msg));
        }
        const { DiseaseName, Description, Solution,AgronomistId} =(req.body);
        const newDisease  = new Disease({
            DiseaseName,
            Description,
            Solution,
            Image: {
              public_id: uploadImage.public_id,
              asset_id: uploadImage.asset_id,
              url: uploadImage.url
            },
            AgronomistId
          });

          await newDisease.save();
          res.status(201).json(newProduct);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Failed to add product.' });
        }
      })
      
const getAllDiseases = asyncWrapper(async (req, res, next) => {
    const diseases = await DiseaseModel.find({});
    if (diseases) {
        return res.status(201).json({
            nbHits: diseases.length,
            diseases
        });
    }
})

const findById = asyncWrapper(async (req, res, next) => {
    const diseaseId = req.params.id;
    const foundDisease = await DiseaseModel.findById(diseaseId);
    if (!foundDisease) {
        return next(new NotFoundError('disease not found'));
    }
    return res.status(200).json({ foundDisease });
});
const updateDisease = asyncWrapper(async (req, res, next) => {
    const diseaseId = req.params.id;
    const updates = req.body;

    const updatedDisease = await DiseaseModel.findByIdAndUpdate(diseaseId, updates, { new: true });
    if (!updatedDisease) {
        return next(new NotFoundError('Disease not found'));
    };
    res.status(200).json(updatedDisease);
});

const deleteDisease = asyncWrapper(async (req, res, next) => {
    const diseaseId = req.params.id;
    const deletedDisease = await DiseaseModel.findByIdAndDelete(userId);
    if (!deletedDisease) {
        return next(new NotFoundError('Disease not found'));
    }
    res.status(200).json({ message: 'Disease deleted Successfully' });
});
const DiseaseControllers = {
    addDisease,
    getAllDiseases,
    findById,
    updateDisease,
    deleteDisease
}
export default DiseaseControllers;