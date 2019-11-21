<template>
  <div class="surveyCreate-container">
       <input
        class="input-group"
        v-model.lazy="question"
        type="text"
        placeholder="Enter Question"
      />
      <OptionInput
        @OnSetOption="setOption"
        class="input-group"
        v-for="(option, i) in options"
        v-bind:key="i"
        :index="i"
      ></OptionInput>
      <button class="button-group" @click="addOption">Add</button>
      <button class="button-group" @click="submitPoll">Submit</button>

  </div>
</template>

<script>
import Survey from '../SurveyClass'
import IndicatorPopup from '../utilities'
import Swal from "sweetalert2";
import { postSurvey } from '../databaseManager'

export default {
  data: function () {
    return {
      options : ['',''],
      question: ''
    }
  },

  methods: {
    async submitPoll () {

      const filterdOptions =  this.options.filter(
        word => word !== ''
      )

      if (this.question === '') {
        IndicatorPopup('Enter question first', 'warning')
        return
      }

     console.log(filterdOptions.length);
     
      if (filterdOptions.length < 2) {
        IndicatorPopup('Enter at least 2 options', 'warning')
      } else {
        const survey = new Survey(this.question, filterdOptions)
        await postSurvey(survey)
        this.$router.push(`/survey/${survey.id}`)
      }
    },

    setOption: function (option, index) {
      // this.$store.state.options[index] = option
      this.options[index] = option
    },

    addOption: function () {
      // this.$store.state.options.push('')
      this.options.push('')
    }
  }
}
</script>

<style>


</style>
