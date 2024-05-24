import mongoose from "mongoose";

const DiseaseSchema = new mongoose.Schema({
    DiseaseName:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Solution:{
        type: String,
        required: true
    },
    Image: {
        public_id: {
          type: String,
        },
        asset_id:{
          type: String,
        },
        url:{
          type: String,
        }
      },
    AgronomistId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
});

const DiseaseModel = mongoose.model('Disease', DiseaseSchema);
export default DiseaseModel;