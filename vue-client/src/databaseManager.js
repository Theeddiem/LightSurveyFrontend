const axios = require('axios');
// const dev = `http://localhost:5000`
const dev = ``

const SurveysEndPoint = `${dev}/api/surveys`;
const VotersEndPoint = `${dev}/api/voters`
const OptionsEndPoint = `${dev}/api/options`

export async function postSurvey(survey) {
  const url = SurveysEndPoint;
    try {
      const json = JSON.stringify(survey);
      const res = await axios.post(url, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        Accept: "application/json",
        'Content-Type': 'application/json'
      }
    });
    return res.data
    } catch (error) {
      console.error("Error:", error);
    }
}

export async function getSurvey(id) {
  try {
    const response = await axios.get(`${SurveysEndPoint}/${id}`)
    return response.data;
  } 
  catch (error) {
    console.log(error);
  }
}

export async function voteForOptions(voter, optionsId) {
  const params = `?optionsId=${optionsId}`;
  const url = `${VotersEndPoint}${params}`;

    try {
      const json = JSON.stringify(voter);
      console.log("this is voter", voter);
      const res = await axios.post(url, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        Accept: "application/json",
        'Content-Type': 'application/json',
      }
    });
    return res.data
    } catch (error) {
      return error.response
    }
}

export async function putSurvey(survey) {
  console.log("update method", survey);

  const url = `${SurveysEndPoint}/${survey.id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(survey), // data can be `string` or {object}!
    });
    return response.status;
  } catch (error) {
    throw console.error("Error:", error);
  }
}

