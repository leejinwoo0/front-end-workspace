const userID = document.querySelector("#userID");
const userIDD = document.querySelector("#userIDD");
const password = document.querySelector("#password");
const passwordd = document.querySelector("#passwordd");
const passwordcheck = document.querySelector("#passwordcheck");
const passwordcheckk = document.querySelector("#passwordcheckk");

userID.addEventListener("input", function () {
  if (userID.value === "") {
    userIDD.innerHTML = "필수 입력 항목입니다";
  } else {
    userIDD.innerHTML = "";
  }
});

password.addEventListener("input", function () {
  const regExp = /^[!-~]{8,32}$/;
  if (regExp.test(password.value)) {
    passwordd.innerHTML = "";
  } else {
    passwordd.innerHTML = "영문자 대/소문자, 특수문자, 숫자 포함 8~32자";
  }
});

passwordcheck.addEventListener("input", function () {
  if (passwordcheck.value === password.value) {
    passwordcheckk.innerHTML = "";
  } else {
    passwordcheckk.innerHTML = "비밀번호와 일치하지 않습니다";
  }
});
