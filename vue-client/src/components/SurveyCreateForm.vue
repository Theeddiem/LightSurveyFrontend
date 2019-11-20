<template>
  <div class="surveyCreate-container">
    <div class="surveyCreate-main-box">
      <input
        class="survey-create-group"
        v-model.lazy="question"
        type="text"
        placeholder="Enter Question"
      />
      <OptionInput
        @something="newValue"
        v-for="(option, i) in this.$store.state.options"
        v-bind:key="i"
        :index="i"
      ></OptionInput>
      <button class="surveyCreate-main-btn-group" @click="addOption">Add</button>
      <button class="surveyCreate-main-btn-group" @click="submitPoll">Submits</button>
    </div>
  </div>
</template>

<script>
import Survey from '../SurveyClass'
import IndicatorPopup from '../utilities'
import { postSurvey } from '../databaseManager'

export default {
  data: function () {
    return {
      question: ''
    }
  },

  methods: {
    async submitPoll () {
      console.log(this.$store)
      console.log(this.$store.state.options)
      console.log(this.question)

      const filterdOptions = this.$store.state.options.filter(
        word => word !== ''
      )

      if (this.question === '') {
        IndicatorPopup('Enter a question first', 'warning')
        return
      }

      if (filterdOptions.length < 2) {
        IndicatorPopup('Enter at least 2 options', 'warning')
      } else {
        const survey = new Survey(this.question, this.$store.state.options)
        console.log(survey)
        this.$store.state.currentSurvey = survey
        this.$store.state.title = this.question
        await postSurvey(survey)
        this.$router.push(`/survey/${survey.id}`)
      }
    },

    newValue: function (option, index) {
      this.$store.state.options[index] = option
    },

    addOption: function () {
      this.$store.state.options.push('')
    }
  }
}
</script>

<style>


.swal-copyclipboard {
  height: 4%;
  width: auto;
  font-size: 10px;
  background-color: #26be84;
  border-radius: 10px;
}

.swal-warning {
  height: 4%;
  width: auto;
  font-size: 10px;
  background-color: #ee467e;
  border-radius: 10px;
}

.swal2-title {
  color: white;
  font-weight: 100;
  margin: 0;
}
</style>
