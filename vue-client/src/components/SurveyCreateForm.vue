<template>
  <div class="surveyCreate-container">
       <input
        class="survey-create-group"
        v-model.lazy="question"
        type="text"
        placeholder="Enter Question"
      />
      <OptionInput
        @OnSetOption="setOption"
        v-for="(option, i) in options"
        v-bind:key="i"
        :index="i"
      ></OptionInput>
      <button class="surveyCreate-main-btn-group" @click="addOption">Add</button>
      <button class="surveyCreate-main-btn-group" @click="submitPoll">Submits</button>

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
          Swal.fire({
      title: text,

      position: "top",
      customClass: "swal-warning",

      showConfirmButton: false,

      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      },
      timer: 1200
    });
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
