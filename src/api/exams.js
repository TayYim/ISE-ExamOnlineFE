/**
 * Mocking client-server processing
 */
const _exams = [
  {
    "paper_year": 2016,
    "paper_title": "高等数学 A",
    "id": 123
  }, {
    "paper_year": 2015,
    "paper_title": "高等数学 A",
    "id": 124
  }, {
    "paper_year": 2016,
    "paper_title": "软件工程导论",
    "id": 125
  }, {
    "paper_year": 2015,
    "paper_title": "软件工程导论",
    "id": 126
  }, {
    "paper_year": 2014,
    "paper_title": "软件工程导论(未添加)",
    "id": 213
  }
]

export default {
  getExams() {
    return _exams;
  }
}
