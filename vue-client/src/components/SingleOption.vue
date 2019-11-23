<template>
  <div>
    <div class="optionSingleDiv">
       <img @click="votersName" class="votersInfo" src="../assets/peopleIcon.svg"  height="20"/>
      <div id="myProgress">
        &nbsp;
        {{currentOption.optionName}} &nbsp;
        <div
          :v-if="Math.random() > 0.5"
          id="myBar"
          :style="styleObject"
        >{{styleObject.width}} &nbsp;
        </div>
      </div>
      <input @change="onInputChange" type="checkbox" class="dynamicCheckBox"/>
    </div>
    </div>
</template>

<script>
export default {
  props: ["currentOption", "eachVote", "index"],

  data: function() {
    return {
      styleObject: {
        width: "0%"
      },
      result : "",
      percentage: 0,
      checked: false,
    };
  },

  methods: {

    votersName (){
        const  voterNames = this.currentOption.voterNames
        if (voterNames.length === 1) this.result = voterNames[0];
        
        else{
        for (let index = 0; index < voterNames.length; index++) 
        {
          const element = voterNames[index];
          if (index === voterNames.length - 1)
            //last index
            this.result += element + " ";
          else {
            this.result += element + ", ";
          }
        }
     }

    },

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
  width: auto;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 15fr 1fr; 
}

.votersInfo{
  grid-column: 1;
  margin-top: 10px;
}

#myProgress {
  text-align: center;
  grid-column: 2;
  background-color: #edf9f5;
  font-size: 14px;
  text-align: left;
  margin: 5px 5px 5px 5px;
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

  margin-left: 5px;
}
</style>
