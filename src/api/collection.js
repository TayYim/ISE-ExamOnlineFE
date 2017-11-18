import axios from '@/axios'

const _collection = [
  {
    id: 123213,
    problemAns: "0",
    problemNote: "xxxxx1"
  }, {
    id: 123214,
    problemAns: "1",
    problemNote: "xxxxx2"
  }, {
    id: 123215,
    problemAns: "2",
    problemNote: "xxxxx3"
  }, {
    id: 123216,
    problemAns: "3",
    problemNote: "xxxxx4"
  }
]

export default {
  getCollection() {
    return _collection;
  },

  // getCollection(subjectId, name) {
  //   let _collection = [];
  //
  //   axios({
  //     method: 'get',
  //     url: '/course/record/',
  //     params: {
  //       username: name,
  //       courseType: subjectId
  //     }
  //   }).then(response => {
  //     _collection = reponse.data;
  //   }).catch(e => {
  //     console.log('err');
  //   });
  //
  //   // handle the type!!
  //   return _collection;
  // }
}
