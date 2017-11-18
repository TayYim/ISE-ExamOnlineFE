/**
 * Mocking client-server processing
 */

import axios from '@/axios'

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
  },

  // getExam(id, mode) {
  //   let _exam = {};
  //
  //   if (mode === 0) {
  //     //normal
  //     axios({
  //       method: 'get',
  //       url: '/course/paper/',
  //       params: {
  //         paperId: id
  //       }
  //     }).then(response => {
  //       _exam = response.data;
  //     }).catch(e => {
  //       console.log('err');
  //     });
  //   } else {
  //     //random
  //     axios({
  //       method: 'get',
  //       url: '/course/infinite/',
  //       params: {
  //         infinite: 1,
  //         course_type: id
  //       }
  //     }).then(response => {
  //       _exam = response.data;
  //     }).catch(e => {
  //       console.log('err');
  //     });
  //   }
  //   // handle the type!!
  //   return _exam;
  // }
}
