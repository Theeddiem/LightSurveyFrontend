<template>
  <div class='surveyPage-container'>
      <h1 id='surveyPage-survey-question'>{{ question }}</h1>
      <template v-if='reRender'>
        <SingleOption
          v-for='(option, i) in options'
          v-bind:key='i'
          :index='i'
          :currentOption='option'
          :eachVote='eachVote'
        ></SingleOption>
      </template>

      <input
        v-model.lazy='voterName'
        class='input-group'
        type='text'
        placeholder='Enter name...'
        autofocus
      />
      <button class="button-group">Add Option</button>
      <button class="button-group"  @click='vote' id='submit-option'>Vote</button>
    </div>
</template>

<script>
import { getSurvey, putSurvey } from '../databaseManager'
import IndicatorPopup from '../utilities'

export default {
  data: function () {
    return {
      reRender: true,
      eachVote: 0,
      id: this.$route.params.id,
      options: null,
      question :"",
      voterName: ''
    }
  },

  methods: {
    async vote () {
      const updateSurvey = {
        name: this.voterName,
        indexs: this.$store.state.voterIndexs,
        id: this.$route.params.id
      }

      console.log('indexs', this.$store.state.voterIndexs)

      if (await putSurvey(updateSurvey) === 400) {
        IndicatorPopup('Alredy Voted For that Option', 'warning') 
      
      } else {
        this.$store.state.voterIndexs = []
        await this.loadData()

        this.reRender = false

        this.$nextTick(() => {
          // Add the component back in
          this.reRender = true
        })
      }
    }, //

    async loadData () {
      console.log("t1", this.$store.state.currentSurvey);
      
      this.$store.state.currentSurvey = await getSurvey(this.id)
      console.log("t2", this.$store.state.currentSurvey);
      
       this.options = this.$store.state.currentSurvey.options
       this.question = this.$store.state.currentSurvey.question

      let totalVotes = 0

      this.$store.state.currentSurvey.options.forEach(element => {
        totalVotes += element.counter
      })

      if (totalVotes !== 0) this.eachVote = Math.floor(100 / totalVotes)
    }
  },

  created: async function () {
    this.loadData()
    console.log("hi");
    
  }
}
</script>

<style></style>
