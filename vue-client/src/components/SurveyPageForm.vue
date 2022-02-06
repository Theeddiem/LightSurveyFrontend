<template>
  <div class="surveyPage-container">
    <h1 dir="auto" id="surveyPage-survey-question">{{ question }}</h1>
    <template v-if="reRender">
      <SingleOption
        v-for="(option, i) in options"
        v-bind:key="i"
        :index="i"
        :currentOption="option"
        :eachVote="eachVote"
      ></SingleOption>
    </template>

    <input
      dir="auto"
      v-model.lazy="voterName"
      class="input-group"
      type="text"
      placeholder="Enter name..."
      autofocus
    />

    <!-- <button class="button-group">Add Option</button> -->
    <button class="button-group" @click="vote" id="submit-option">Vote</button>
    <pulse-loader :loading="loading" style="margin-top:10px"></pulse-loader>
  </div>
</template>

<script>
import {
  getSurvey,
  putSurvey,
  voteForOptions,
  getOptions
} from "../databaseManager";
import IndicatorPopup from "../utilities";
import SingleOption from "./SingleOption";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: { SingleOption, PulseLoader },

  data: function() {
    return {
      reRender: true,
      eachVote: 0,
      id: this.$route.params.id,
      options: null,
      question: "",
      voterName: "",
      connected: false,
      dataFromSocket: true,
      loading: false
    };
  },

  methods: {
    async send() {
      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send(`/app/survey/${this.id}`, {}, {});
      }
    },

    connect() {
      let dev = ``;
      if (window.location.href.includes("localhost:80")) {
        dev = `http://localhost:5000`;
      }
      this.socket = new SockJS(`${dev}/api/survey`);
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.debug = () => {}; // for debug purpouse remove this row
      this.stompClient.connect(
        {},
        frame => {
          this.connected = true;
          this.stompClient.subscribe(`/topic/surveys/${this.id}`, tick => {
            this.updateVoters(tick);
          });
        },
        error => {
          console.log(error);
          this.connected = false;
        }
      );
    },

    updateVoters(survey) {
      if (this.dataFromSocket) {
        this.$store.state.currentSurvey = JSON.parse(survey.body);
        this.question = this.$store.state.currentSurvey.question;
        this.options = this.$store.state.currentSurvey.options;
        let totalVotes = 0;

        this.options.forEach(element => {
          totalVotes += element.voters.length;
        });

        if (totalVotes !== 0) this.eachVote = 100 / totalVotes;

        this.reRender = false;

        this.$nextTick(() => {
          // Add the component back in
          this.reRender = true;
        });
      }
      this.dataFromSocket = true;
    },

    async vote() {
      this.voterName = this.voterName.trim();

      if (this.voterName === "") {
        IndicatorPopup("Enter Name first", "warning");
        return;
      }

      if (this.$store.state.optionsId.length === 0) {
        IndicatorPopup("Choose an option first", "warning");
        return;
      }

      const updatedSurvey = this.$store.state.currentSurvey;
      const optionsId = this.$store.state.optionsId;
      const voter = { name: this.voterName };
      const response = await voteForOptions(voter, optionsId);
      if (response.status === 400) {
        IndicatorPopup("Alredy Voted For that Option", "warning");
      } else {
        this.loading = true;
        this.$store.state.optionsId = [];
        await this.loadData();
        this.dataFromSocket = false;
        await this.send();
        this.loading = false;
        this.reRender = false;

        this.$nextTick(() => {
          // Add the component back in
          this.reRender = true;
        });
      }
    },
    async loadData() {
      this.$store.state.currentSurvey = await getSurvey(this.id);
      this.question = this.$store.state.currentSurvey.question;
      this.options = this.$store.state.currentSurvey.options;
      let totalVotes = 0;

      this.options.forEach(element => {
        totalVotes += element.voters.length;
      });

      if (totalVotes !== 0) this.eachVote = 100 / totalVotes;
    }
  },

  created: async function() {
    await this.loadData();
    this.connect();
    document.title = this.question;
  }
};
</script>

<style scoped>
.surveyPage-container {
  grid-column: 2;
  grid-row: 2;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

#surveyPage-survey-question {
  font-size: 25px;
  font-family: myFirstFont, Helvetica, sans-serif;
}
</style>
