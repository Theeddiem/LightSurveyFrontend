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
     <pulse-loader :loading="loading" style="margin-top:10px"></pulse-loader>
  </div>

  
</template>

<script>
import Survey from '../SurveyClass'
import IndicatorPopup from '../utilities'
import Swal from "sweetalert2";
import { postSurvey } from '../databaseManager'
import OptionInput from './OptionInput.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {

    components: {OptionInput,  PulseLoader},

  data: function () {
    return {
      options : ['',''],
      question: '',
      loading: false,
    }
  },

  methods: {
 
    async submitPoll () {
      const filterdOptions =  this.options.filter(
        word => word !== ''
      )

      this.question = this.question.trim()
      if (this.question === '') {
        IndicatorPopup('Enter question first', 'warning')
        return
      }

      if(this.question.length <  3)
      {
        IndicatorPopup('The question is too short', 'warning')
        return
      }
     
      if (filterdOptions.length < 2) {
        IndicatorPopup('Enter at least 2 options', 'warning')
      } else {
      this.loading = true
      const currenySurvey  = await postSurvey(new Survey(this.question, filterdOptions))
       this.loading = false
      this.$router.push(`/survey/${currenySurvey.uuid}`)
      }
    },

    setOption: function (option, index) {
      if(option.trim()!='')
        this.options[index] = option
    },

    addOption: function () {
      this.options.push('')
    }
  }
}
</script>

<style>

.surveyCreate-container {
  padding: 15px;
  grid-column: 2;
  grid-row: 2;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  max-width: 500px;
}



</style>
