const _questions = [
  {
    "success": 1,
    id: 123213,
    pro_detail: "I have no idea about the advanced mathmatics like x^2",
    option: ["\\frac{1}{2}", "\\displaystyle\\sum_{i=1}^{k+1}i", "\\frac{k(k+1)+2(k+1)}{2}", "option D"]
  }, {
    "success": 1,
    id: 123214,
    pro_detail: "I have no idea about the JDS",
    option: ["emm", "hhh", "233", "666"]
  }, {
    "success": 1,
    id: 123215,
    pro_detail: "I have no idea about the WZW",
    option: ["T A", "T B", "T C", "T D"]
  }, {
    "success": 1,
    id: 123216,
    pro_detail: "I have no idea about the MMM",
    option: ["t A", "t B", "t C", "t D"]
  }
]

export default {
  getQuestions() {
    return _questions;
  }
}
