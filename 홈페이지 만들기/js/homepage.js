  function login(){
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    const validID = 'gpbill';
    const validPassword  = 'pptto*1406';

    if(userID === validID && password === validPassword){
      window.location.href = "홈페이지.html";
      return false;
    }else{
      document.getElementById('message').textContent = '아이디 또는 비밀번호가 맞지 않습니다.';
      return false;
    }
  }