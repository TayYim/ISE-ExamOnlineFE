/**
 * Mocking client-server processing
 */

import axios from '@/axios'

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
  // getExams() {
  //       // axios({
  //       //   method: 'post',
  //       //   url: '/user/sendEmail/',
  //       //   data: {
  //       //     email: "yan_sy@126.com"
  //       //   }
  //       // }).then(response => {
  //       //   console.log(response);
  //       // }).catch(e => {});
  //       //
  //         // axios({
  //         //   method: 'get',
  //         //   url: '/course/course/',
  //         //   params: {
  //         //     "course": 5
  //         //   }
  //         // }).then(response => {
  //         //   console.log(response);
  //         // }).catch(e => {
  //         //     console.log(e);
  //         // });
  //
  //         // axios.get('/course/course/', querystring.stringify({ course: 5 }));
  //
  //   return _exams;
  // },

  getExams(subjectId,cb) {
      let _exams={};
    axios({
      method: 'get',
      url: '/course/course/',
      params: {
        course: subjectId
      }
    }).then(response => {
      _exams = response.data.papers;
      cb(_exams);
    }).catch(e => {});
    // handle the type!!
  }
}
