import axios from '@/axios';

function login(user, password) {
  let emailPatt = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
  let type = emailPatt.test(user)
    ? "email"
    : "username";

  let pack = {
      [type]: user,
      password: password
    }

    let name,
      success;

    axios({method: 'post', url: '/user/login/', data: pack}).then(response => {
      name = reponse.data.username;
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });

    return {name: name, success: 1};
  };

  function logout(name) {
    let success;
    axios({
      method: 'delete',
      url: '/user/user/',
      params: {
        username: name
      }
    }).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  };

  function register(email, name, password, validate) {
    let pack = {
      email: email,
      username: name,
      password: password,
      validate: validate
    }

    let success;

    axios({method: 'post', url: '/user/register/', data: pack}).then(response => {
      name = reponse.data.username;
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {name: name, success: success}
  }

  function checkRepeat(user) {
    let emailPatt = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
    let type = emailPatt.test(user)
      ? "email"
      : "username";

    let status;

    axios({
      method: 'get',
      url: '/user/register/',
      params: {
        [type]: user
      }
    }).then(response => {
      status = reponse.data.status;
    }).catch(e => {
      console.log(e);
    });
    return {status: status}
  }

  function sendEmail(email) {
    let success;

    axios({
      method: 'post',
      url: '/user/sendEmail/',
      data: {
        email: email
      }
    }).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  function changePassword(name, oldPassword, newPassword) {
    let pack = {
      username: name,
      newPassword: newPassword,
      oldPassword: oldPassword
    }

    let success;

    axios({method: 'post', url: '/user/password/', data: pack}).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  function forgetPassword(name, email, validate, newPassword) {
    let pack = {
      email: email,
      username: name,
      newPassword: newPassword,
      validate: validate
    }

    let success;

    axios({method: 'put', url: '/user/password/', data: pack}).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  //whay course_type?
  function addCollection(questionId, subjectId, name, note) {
    let pack = {
      ProblemId: questionId,
      courseType: subjectId,
      username: name,
      note: note
    }

    let success;

    axios({method: 'post', url: '/course/record/', data: pack}).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  function deleteCollection(questionId, name) {
    let pack = {
      ProblemId: questionId,
      username: name
    }

    let success;

    axios({method: 'delete', url: '/course/record/', params: pack}).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  function reportWrong(questionId, name, reason) {
    let pack = {
      ProblemId: questionId,
      username: name,
      reason: reason
    }

    let success;

    axios({method: 'post', url: '/course/', data: pack}).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  function changeNote(questionId, name, note) {
    let pack = {
      ProblemId: questionId,
      username: name,
      note: note
    }

    let success;

    axios({method: 'put', url: '/course/', data: pack}).then(response => {
      success = reponse.data.success;
    }).catch(e => {
      console.log(e);
    });
    return {success: success}
  }

  export default {
    login,
    logout,
    register,
    checkRepeat,
    sendEmail,
    changePassword,
    forgetPassword,
    addCollection,
    deleteCollection,
    reportWrong,
    changeNote
  }
