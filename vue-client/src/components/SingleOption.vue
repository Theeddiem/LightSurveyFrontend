<template>
  <div>
    <div class="optionSingleDiv">
      <div id="myProgress">
        &nbsp;
        {{currentOption.optionName}} &nbsp;
        <div
          :v-if="Math.random() > 0.5"
          id="myBar"
          :style="styleObject"
        >{{styleObject.width}} &nbsp;</div>
      </div>
      <input @change="onInputChange" type="checkbox" class="dynamicCheckBox" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentOption", "eachVote", "index"],

  data: function() {
    return {
      percentage: 0,
      checked: false,

      styleObject: {
        width: "0%"
      }
    };
  },

  methods: {
    onInputChange() {
      this.checked = !this.checked;

      if (this.checked) {
        if (!this.$store.state.voterIndexs.includes(this.index))
          this.$store.state.voterIndexs.push(this.index);
      } else {
        this.$store.state.voterIndexs = this.$store.state.voterIndexs.filter(
          item => item !== this.index
        );
      }
    }
  },

  created: function() {
    {
      let desiredWidth = this.currentOption.counter * this.eachVote;
      console.log(this.$store.state.currentSurvey);

      var width = 0;
      var refToStyleObject = this.styleObject;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= desiredWidth) {
          clearInterval(id);
        } else {
          width++;

          refToStyleObject.width = width + "%";
        }
      }
    }
  }
};
</script>

<style>
.optionSingleDiv {
  width: 200px;
  display: grid;
  grid-template-columns: 6fr 1fr;
}

#myProgress {
  text-align: center;
  grid-column: 1;
  background-color: #edf9f5;
  font-size: 16px;
  text-align: left;
  margin: 5px 5px 5px 15px;
  border-color: black;
  border-width: 1px;
  border-style: solid;
}

#myBar {
  height: 15px;
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
  grid-column: 2;
  margin-top: 10px;
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
  grid-column: 2;
  margin-left: 5px;
}
</style>
