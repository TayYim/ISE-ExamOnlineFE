/**
 * Mocking client-server processing
 */
const _subjects = [
  {
    "id": -1,
    "name": "全部"
  }, {
    "id": 1,
    "name": "高等数学"
  }, {
    "id": 2,
    "name": "线性代数"
  }, {
    "id": 3,
    "name": "数字电路"
  }, {
    "id": 4,
    "name": "大学物理"
  }, {
    "id": 5,
    "name": "软工导论"
  }, {
    "id": 6,
    "name": "数据结构"
  }, {
    "id": 7,
    "name": "微观经济"
  }, {
    "id": 8,
    "name": "新闻英语"
  }
]

export default {
    // getSubjects(cb){
    //     cb(_subjects)
    // }
    getSubjects(){
        return _subjects
    }
}
