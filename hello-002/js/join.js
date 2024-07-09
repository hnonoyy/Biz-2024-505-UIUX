document.addEventListener("DOMContentLoaded", () => {
  const join_body = document.querySelector("section.join.body");
  const join_form = join_body.querySelector("form");
  const input_username = join_body.querySelector("input[name='username']");
  const input_password = join_body.querySelector("input[name='password']");
  const input_re_password = join_body.querySelector(
    "input[name='re_password']"
  );
  const input_name = join_body.querySelector("input[name='name']");
  const input_tel = join_body.querySelector("input[name='tel']");
  const btn_join = join_body.querySelector("input.join");

  const onValidation = () => {
    const value_username = input_username.value;
    const value_password = input_password.value;
    const value_re_password = input_re_password.value;
    /* 
    join(회원가입) 버튼을 클릭했을 때
     1. username, password, re_password 가 입력 되었는지 검사하기
    2. password 와 re_password 가 일치하는지 검사하기
     */
    if (!value_username) {
      alert("아이디가 입력되지않았습니다");
      input_username.select();
    }
    if (!value_password) {
      alert("비밀번호가 입력되지않았습니다");
      input_password.select();
    }
    if (!value_re_password) {
      alert("비밀번호 확인값이 입력되지않았습니다");
      input_re_password.select();
    }
    if (value_password !== value_re_password) {
      alert("비밀번호가 일치하지 않습니다.");
      input_re_password.select();
    }
    form.submit();
  };
  btn_join.addEventListener("click", onValidation);
});
