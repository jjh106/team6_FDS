<template>
	<div class="signIn_wrapper">
		<div class="dim"></div>
    <div class="login_page_wrapper">
      <div class="login_container">
       <h1 class="logo">
        <a href="#">
          <img src="../assets/images/kardoc.png" alt="로고">
        </a>
      </h1>
        <form class="login_form" action="">
          <label for="login_id"></label>
          <input id="login_id" type="email" name="email" placeholder="이메일 주소" maxlength="20">
          <label for="login_pwd"></label>
          <input id="login_pwd" type="password" name="password" placeholder="비밀번호" maxlength="10">
          <router-link class="login_btn" tag="button" to="/main" @click="LogIn">로그인</router-link>
        </form>
        <p class="find_id_pwd">
          <a href="#">아이디 / 비밀번호 찾기</a>
        </p>
        <span class="separate_line">페이스북으로 가입된 아이디가 있으신가요?</span>
        <button class="login_btn_fb" type="button">페이스북 로그인</button>
      </div>
    </div>
	</div>
</template>

<script>

export default {
  name: 'signIn_wrapper',
  data() {
    return {

    }
  }
}
</script>

<style>

html,body,div,header,nav,section,aside,article,footer,figure,figcaption,
ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,fieldset {
	margin:0;
	padding:0;
}
input, button, select, textarea {
  font-family: inherit; 
}
ul {
  list-style-type: none; 
}
a:link, a:visited {
  text-decoration: none; 
}
a:hover, a:focus {
  color: #f00;
}
html {
	font-size: 16px;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  background-image: url(../assets/images/car-repairing.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
/*기본값 초기화*/
h1, p{
  margin: 0;
  padding: 0;
}
/*로그인 페이지 래퍼*/
.login_page_wrapper {
  max-width: 960px;
  min-width: 480px;
  margin: 0 auto;
}
/*로그인 페이지 헤더*/
.login_page_header {
  z-index: 100;
  background: rgba(44, 62, 80, 0.90);
  padding: 1.5rem 0;
}
/* 로고 */
.logo {
	background: #fff;
	margin: 0 auto 1rem;
	display: block;
  width: 8rem;
  border-radius: 5px;
  color: #ECF0F1;
  text-align: center;
  font-size: 1rem;
}
.logo img {
	width: 100%;
  padding: 0 .8rem;
}
/*로그인 전체 컨테이너 */
.dim {
  position: absolute;
	top: 0;
	left: 0;
	background-color: #000;
	opacity: 0.4;
	width: 100%;
	height: 100%;
	z-index: -1;
}
.login_container {
  background-color: rgba(236, 240, 241, 0.8);
  width: 70%;
  margin: 6rem auto 0;
  padding: 2rem 0;
  box-shadow: 2px 2px 4px #2a2a2a, 4px 4px 8px #2a2a2a;
}
.login_container span {
  display: block;
  width: 60%;
  margin: 0 auto;
  padding: .5rem 0;
  font-size: .8rem;
  color: #5c5c5c;
  text-align: center;
}
.login_container span::before {
  content: "";
  display: block;
  height: 1px;
  width: 100%;
  margin-bottom: 1.5rem;
  background: #a2a2a2;
}
.login_container h1 {
  padding: 1rem 0;
  font-size: 2rem;
  text-align: center;
  color: #2C3E50;
}
/*로그인 폼 */
.login_form input {
  margin: 0 auto;
  display: block;
  background: transparent;
  border: 2px solid #aaa;
  border-radius: 20px;
  outline: none;
  transition: all .5s ease-in-out;
  width: 50%;
  padding: .7rem 0 .7rem 1rem;
  font-size: .8rem;
}
.login_form input:focus {
  border: 2px solid #2c3e50;
}
#login_pwd {
  margin-top: 1rem;
}
/*로그인 버튼 */
.login_btn, .login_btn_fb {
  width: 40%;
  margin: 0 auto;
  padding: 1rem 0;
  display: block;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
/*일반 로그인 버튼*/
.login_btn {
  margin-top: 1rem;
  background: #2C3E50;
  color: #ECF0F1;
  font-weight: bold;
}
/*페이스북 로그인 버튼*/
.login_btn_fb {
  background: #203571;
  color: #ECF0F1;
  font-weight: bold;
}
/*아이디 패스워드 찾기*/
.find_id_pwd {
  width: 60%;
  padding: 1.5rem 0 0 0;
  margin: 0 auto;
}
.find_id_pwd a {
  width: 100%;
  display: block;
  text-align: center;
  font-size: .9rem;
  color: #5c5c5c;
}
</style>