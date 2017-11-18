const _judge = {
  "success": 1,
  "Problems": [
    {
      id: "123213",
      correctAns: "0",
      result: "0",
      originAns: "1" //no need
    }, {
      id: "123214",
      correctAns: "1",
      result: "1",
      originAns: "0"
    }, {
      id: "123215",
      correctAns: "2",
      result: "0",
      originAns: "0"
    }, {
      id: "123216",
      correctAns: "3",
      result: "0",
      originAns: "0"
    }
  ],
  evaluate: "Sutpid function for child"
}

export default {
  getJudge() {
    return _judge;
  }
}
