<template>
  <div class="optionSingleDiv">
    <img
      @click="votersName"
      class="votersImg"
      src="../assets/voters_icon.svg"
      height="20"
    />

    <div dir="auto" class="myProgress">
      {{ currentOption.name }}

      <div class="myBar" :style="styleObject">{{ styleObject.width }}</div>
      <p dir="auto" class="voters" v-if="showModal">
        Voters: {{ votersNameString }}
      </p>
    </div>

    <input @change="onInputChange" type="checkbox" class="dynamicCheckBox" />
  </div>
</template>

<script>
export default {
  props: ["currentOption", "eachVote", "index", "id"],

  data: function() {
    return {
      styleObject: {
        width: "0%"
      },
      showModal: false,
      votersNameString: "",
      checked: false
    };
  },

  methods: {
    votersName() {
      this.votersNameString = "";
      this.showModal = !this.showModal;
      const voters = this.currentOption.voters;
      if (voters.length === 1)
        // only one voter doesn't need a comma after him
        this.votersNameString = `${voters[0].name}`;
      else {
        for (let index = 0; index < voters.length; index++) {
          const element = voters[index].name;
          if (index === voters.length - 1)
            // last voter doesn't need a comma after him
            this.votersNameString += element + " ";
          else {
            this.votersNameString += element + ", ";
          }
        }
      }
    },

    onInputChange() {
      this.checked = !this.checked;
      const currentOptionId = this.currentOption.id;
      if (this.checked) {
        if (!this.$store.state.optionsId.includes(currentOptionId))
          this.$store.state.optionsId.push(currentOptionId);
      } else {
        this.$store.state.optionsId = this.$store.state.optionsId.filter(
          item => item !== currentOptionId
        );
      }
    }
  },

  created: function() {
    {
      const currentOptionCounter = this.currentOption.voters.length;

      let desiredWidth = (currentOptionCounter * this.eachVote).toFixed(2);

      var width = 0;
      var refToStyleObject = this.styleObject;
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= desiredWidth) {
          clearInterval(id);
        } else {
          width++;
          refToStyleObject.width = width + "%";

          if (width >= desiredWidth) {
            refToStyleObject.width = desiredWidth + "%";
          }
        }
      }
    }
  }
};
</script>

<style>
.voters {
  padding: 1px;
  margin: 1px;
  font-size: 14px;
}

.optionSingleDiv {
  display: flex;
  flex-direction: row;
}
.votersImg {
  grid-column: 1;
  margin-top: 12px;
  cursor: pointer;
}

.myProgress {
  width: 100%;
  background-color: #edf9f5;
  font-size: 18px;
  text-align: left;
  border-color: black;
  margin: 5px 5px 5px 5px;
  border-width: 1px;
  border-style: solid;
}

.myBar {
  font-size: 12px;
  font-style: italic;
  background-color: #48ca98;
  text-align: right; /* To center it horizontally (if you want) */
  line-height: 15px; /* To center it vertically */
  color: black;
  border-color: black;
  border-width: 0.1px;
  border-style: solid;
}

.dynamicCheckBox {
  margin-top: 15px;
  cursor: pointer;
}

.dynamicCheckBox:before {
  content: "";
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: white;
}

.dynamicCheckBox:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-left: 5px;
}
</style>
