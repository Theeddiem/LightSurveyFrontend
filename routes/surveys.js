const { Survey } = require("../models/survey");
const express = require("express");
const router = express.Router();
const requestIp = require("request-ip");

router.post("/", async (req, res) => {
  console.log(req.body);

  const survey = new Survey({
    id: req.body.id,
    question: req.body.question,
    options: req.body.options
  });



  try {
    await survey.save();
    res.send(survey);
  } catch (error) {
    res.status(400).send("Error-serverSide", error);
  }
});

router.get("/:id", async (req, res) => {
  const survey = await Survey.findOne({ id: req.params.id });

  console.log("get");

  if (!survey) {
    return res.status(404).send("The survey with the given ID was not found");
  }

  res.send(survey);
});

function sortByVotes(survey) {
  survey.options.sort(function(a, b) {
    return b.counter - a.counter;
  });
}

function attach(oldSurvey, newSurvey) {
  const indexesToUpdate = newSurvey.indexs;

  for (let i = 0; i < indexesToUpdate.length; i++) {
    const indexToUpdate = indexesToUpdate[i];
    oldSurvey.options[indexToUpdate].voterNames.push(newSurvey.name);
    oldSurvey.options[indexToUpdate].counter++;
  }
}

router.put("/:id", async (req, res) => {
  const ip = requestIp.getClientIp(req);

  const oldSurvey = await Survey.findOne({ id: req.params.id });
  const newSurvey = req.body;

  if (UpdateOrNot(newSurvey.indexs, oldSurvey, ip)) {
    attach(oldSurvey, newSurvey);

    const survey = await Survey.updateOne(
      { id: req.params.id },
      {
        $set: {
          options: oldSurvey.options
        }
      },
      { new: true }
    );

    res.send(survey);
  } else {
    res.status(400).send("Alredy Voted");
  }
});

function indexsThathaveChanged(oldSurvey, newSurvey) {
  indexs = [];

  for (let index = 0; index < newSurvey.options.length; index++) {
    console.log(index);
    if (newSurvey.indexs[index].counter !== oldSurvey.options[index].counter) {
      indexs.push(index);
    }
  }

  console.log("this is,", indexs);
  return indexs;
}

function UpdateOrNot(indexs, oldSurvey, ip) {
  updateOrNot = true;

  indexs.forEach(element => {
    if (oldSurvey.options[element].voterIps.includes(ip)) {
      updateOrNot = false;
    } else {
      oldSurvey.options[element].voterIps.push(ip);
    }
  });

  console.log("the status", updateOrNot);

  return updateOrNot;
}

module.exports = router;
