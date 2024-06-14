/*
 사용자가 입력을 했을 때 해당 조건이 틀릴 경우 빨간색으로 표시
 해당조건이 맞는경우 초록색 표시와 함께 "ok!"
*/

const userID = document.querySelector("#userID");
const userIDSpan = document.querySelector("#userID+Span");

userID.addEventListener("input", function (e) {
  //첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총4~12자로 입력하시오.
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userID.value);
  console.log(e.target.nextElementSibling);
  if (check) {
    userIDSpan.style.color = "green";
    userIDSpan.innerHTML = "OK!";
    //e.target.nextElementSibling.style.color = "green"
    //e.target.nextElementSibling.style.innerHTML = "OK!"
  } else {
    userIDSpan.style.color = "red";
    userIDSpan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총4~12자로 입력하시오.";
    //e.target.nextElementSibling.style.color = "red"
    //e.target.nextElementSibling.style.innerHTML = //"첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총4~12자로 입력하시오.";
  }
});
//영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.
// [!-~]{}
const userPWD = document.querySelector("#userPWD");
const userPWDSpan = document.querySelector("#userPWD+Span");
userPWD.addEventListener("input", function (e) {
  const regExp = /^[a-zA-Z0-9!-~]{8,15}$/;
  const check = regExp.test(userPWD.value);
  if (check) {
    userPWDSpan.style.color = "green";
    userPWDSpan.innerHTML = "OK!";
  } else {
    userPWDSpan.style.color = "red";
    userPWDSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

//위의 비밀번호와 일치하게 입력하시오.
// 정규표현식 필요 x 위에 입력한 비밀번호 값이랑 비교
const userPWDCheck = document.querySelector("#userPWDCheck");
const userPWDCheckSpan = document.querySelector("#userPWDCheck+span");
userPWDCheck.addEventListener("input", function (e) {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(userPWDCheck.value);
  console.log(userPWDCheck.value);
  console.log(userPWDCheckSpan);
  if (check) {
    userPWDCheckSpan.style.color = "green";
    userPWDCheckSpan.innerHTML = "OK!";
  } else {
    userPWDCheckSpan.style.color = "red";
    userPWDCheckSpan.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});

//한글로만 이루어져야되며 2글자 이상으로 입력하시오.
//[가-힣]{}
const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userName+Span");
userName.addEventListener("input", function (e) {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(userName.value);
  if (check) {
    userNameSpan.style.color = "green";
    userNameSpan.innerHTML = "OK!";
  } else {
    userNameSpan.style.color = "red";
    userNameSpan.innerHTML =
      "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});
//이메일 형식에 맞춰서 입력하시오
//asd@gamil.com
const email = document.querySelector("#email");
const emailspan = document.querySelector("#email+span");
email.addEventListener("input", function (e) {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(email.value);
  if (check) {
    emailspan.style.color = "green";
    emailspan.innerHTML = "OK!";
  } else {
    emailspan.style.color = "red";
    emailspan.innerHTML = "이메일 형식에 맞춰서 입력하시오!";
  }
});

//-> (영어나 숫자 여러문자 상관없이길이도 상관없이 :+)@(앞이랑마찬가지)
