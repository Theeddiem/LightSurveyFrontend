export default class Survey {
  constructor(question, optionsArr) {
    this.question = question;
    this.options = new Array(optionsArr.length).fill(0).map((v) => ({
      name: "",
      voters: [],
    }));

    for (let index = 0; index < optionsArr.length; index++)
      this.options[index].name = optionsArr[index];
  }
}
