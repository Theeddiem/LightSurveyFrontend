
const Joi = require('@hapi/joi');
const mongoose = require('mongoose')

const SurveySchema = new mongoose.Schema({
   
    id:{
        type: String,
        required : true,
    },

    question: {
        type: String,
        required : true,
        minlength : 3 ,
        maxlength : 200
    },

    options :{
      
        type: [
           {
                counter: { type: Number},

                optionName : {type: String},
               
                voterNames :{
                    type : [Array]
                },

                voterIps :{
                type: [Array]
                }
           }
       ]
    },
})

const Survey = mongoose.model('Survey',SurveySchema)

module.exports.Survey = Survey;
module.exports.SurveySchema = SurveySchema;



// function validateSurvey(survey) {
  
//     const schema = Joi.object({
//         name : Joi.string().min(3).max(10).required()
//     })

//     return schema.validate(survey)
// }


// question: survey.question,
// options: survey.options,
// id: survey.id,
// counter: survey.counter,
// voterNames :survey.voterNames