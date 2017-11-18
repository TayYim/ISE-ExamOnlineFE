/**
 * Mocking client-server processing
 */
const _exam = {
  "success": 1,
  "paperId": 123,
  "ProblemNum": 4,
  "Problems": [
    {
      "ProblemId": 123213,
      "ProblemOrder": 1
    }, {
      "ProblemId": 123214,
      "ProblemOrder": 2
    }, {
      "ProblemId": 123215,
      "ProblemOrder": 3
    }, {
      "ProblemId": 123216,
      "ProblemOrder": 4
    }
  ]
}

export default {
  getExam() {
    return _exam;
  }
}
