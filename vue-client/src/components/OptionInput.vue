<template>
  <input
    dir="auto"
    @change="getValue"
    v-model.lazy="value"
    type="text"
    placeholder="Add Option..."
  />
</template>

<script>
export default {
  props: ["index"],

  data: function() {
    return {
      value: ""
    };
  },

  methods: {
    getValue() {
      this.$emit("OnSetOption", this.value, this.index);
    }
  }
};
</script>

<style></style>
