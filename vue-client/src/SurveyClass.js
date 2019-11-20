function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class Survey {
  constructor(question, optionsArr) {
    this.id = uuidv4();
    this.question = question;
    this.options = new Array(optionsArr.length).fill(0).map(v => ({
      counter: 0,
      optionName: "",
      voterNames: []
    }));

    for (let index = 0; index < optionsArr.length; index++)
      this.options[index].optionName = optionsArr[index];
  }
}
