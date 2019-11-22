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
import modal from './Model.vue';
import Survey from '../SurveyClass'
import IndicatorPopup from '../utilities'
import Swal from "sweetalert2";
import { postSurvey } from '../databaseManager'
import OptionInput from './OptionInput.vue'

export default {

    components: {OptionInput,  modal},

  data: function () {
    return {
      options : ['',''],
      question: '',
          isModalVisible: false,
    }
  },

  methods: {
 
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }    ,

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
  grid-template-columns: 1fr 1fr;
  padding: 5%;
  grid-column: 2;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  display: grid;
  text-align: center;
}



</style>
