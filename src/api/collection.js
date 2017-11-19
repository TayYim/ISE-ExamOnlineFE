import axios from '@/axios'

// const _collection = [
//   {
//     id: 5,
//     problemAns: "0",
//     problemNote: "xxxxx1"
//   }, {
//     id: 10,
//     problemAns: "1",
//     problemNote: "xxxxx2"
//   }, {
//     id: 15,
//     problemAns: "2",
//     problemNote: "xxxxx3"
//   }, {
//     id: 20,
//     problemAns: "3",
//     problemNote: "xxxxx4"
//   }
// ]

export default {
  // getCollection() {
  //   return _collection;
  // },

  getCollection(subjectId, name, cb) {
    let _collection = [];

    axios({
      method: 'get',
      url: '/course/record/',
      params: {
        username: name,
        courseType: subjectId
      }
    }).then(response => {
      _collection = response.data;
      cb(_collection)
    }).catch(e => {
      console.log(e);
    });

    // handle the type!!
    // return _collection;
  }
}
