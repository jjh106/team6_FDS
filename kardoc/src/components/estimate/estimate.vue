<template>
	<div class="wrap">
		<div class="dim"></div>
		<div class="wrapper">
			<h1 class="logo">
				<a href="">
					<img src="../../assets/images/kardoc.png" alt="">
				</a>
			</h1>
			<a href="#open-area">지역 선택</a>
			<div class="modal_content" id="open-area">
				<div>
					<div class="modal-header">
						<h3>지역선택</h3>
						<p>3개까지 선택 가능합니다.</p>
						<a href="#close-area">취소</a>
					</div>
					<div class="modal-main">
						<button type="button" class="modal-btn">서울특별시</button>
						<button type="button" class="modal-btn">경기도</button>
						<button type="button" class="modal-btn">인천광역시</button>
						<button type="button" class="modal-btn">부산광역시</button>
						<button type="button" class="modal-btn">대구광역시</button>
						<button type="button" class="modal-btn">대전광역시</button>
						<button type="button" class="modal-btn">광주광역시</button>
						<button type="button" class="modal-btn">울산광역시</button>
						<button type="button" class="modal-btn">경상북도</button>
						<button type="button" class="modal-btn">경상남도</button>
						<button type="button" class="modal-btn">충청북도</button>
						<button type="button" class="modal-btn">충청남도</button>
						<button type="button" class="modal-btn">강원도</button>
						<button type="button" class="modal-btn">전라북도</button>
						<button type="button" class="modal-btn">제주도</button>
						<button type="button" class="modal-btn">전라남도</button>
						<button type="button" class="modal-btn">세종시</button>
					</div>
				</div>
			</div>
			<a href="#open-parts">수리 유형</a>
			<div class="modal_content" id="open-parts">
				<div>
					<div class="modal-header">
						<h3>부품 선택</h3>
						<p>2개까지 선택 가능합니다.</p>
						<a href="#close-parts">취소</a>
					</div>
					<div class="modal-main">
						<button type="button" class="modal-btn">범퍼</button>
						<button type="button" class="modal-btn">프론트 판넬</button>
						<button type="button" class="modal-btn">앞펜더</button>
						<button type="button" class="modal-btn">앞휄하우스</button>
						<button type="button" class="modal-btn">에이필러</button>
						<button type="button" class="modal-btn">앞문</button>
						<button type="button" class="modal-btn">비필러</button>
						<button type="button" class="modal-btn">뒷문</button>
						<button type="button" class="modal-btn">뒤펜더</button>
						<button type="button" class="modal-btn">뒤휠하우스</button>
						<button type="button" class="modal-btn">루프판넬</button>
						<button type="button" class="modal-btn">트렁크</button>
						<button type="button" class="modal-btn">리어판넬</button>
						<button type="button" class="modal-btn">본네트</button>
						<button type="button" class="modal-btn">유리</button>
					</div>
				</div>
			</div>
			<form>
				<fieldset>
					<legend>차량 정보</legend>
					<select name="brand" required>
						<option value="BRAND">BRAND</option>
						<option value="BMW">BMW</option>
						<option value="폭스바겐">폭스바겐</option>
						<option value="벤츠">벤츠</option>
						<option value="아우디">아우디</option>
						<option value="현대">현대</option>
						<option value="기아">기아</option>
						<option value="쉐보레">쉐보레</option>
						<option value="르노삼성">르노삼성</option>
						<option value="제네시스">제네시스</option>
						<option value="렉서스">렉서스</option>
						<option value="인피니티">인피니티</option>
						<option value="미니">미니</option>
						<option value="토요타">토요타</option>
						<option value="닛산">닛산</option>
						<option value="혼다">혼다</option>
						<option value="쌍용">쌍용</option>
						<option value="한국지엠">한국지엠</option>
						<option value="포드">포드</option>
						<option value="크라이슬러">크라이슬러</option>
						<option value="랜드로버">랜드로버</option>
						<option value="푸조">푸조</option>
						<option value="링컨">링컨</option>
						<option value="미쓰비시">미쓰비시</option>
						<option value="볼보">볼보</option>
						<option value="스바루">스바루</option>
						<option value="재규어">재규어</option>
						<option value="지프">지프</option>
						<option value="캐딜락">캐딜락</option>
						<option value="포르쉐">포르쉐</option>
						<option value="사브">사브</option>
						<option value="스마트">스마트</option>
						<option value="페라리">페라리</option>
						<option value="피아트">피아트</option>
						<option value="시트로엥">시트로엥</option>
						<option value="닷지">닷지</option>
						<option value="람보르기니">람보르기니</option>
						<option value="로터스">로터스</option>
						<option value="롤스로이스">롤스로이스</option>
						<option value="마세라티">마세라티</option>
						<option value="마이바흐">마이바흐</option>
						<option value="마쯔다">마쯔다</option>
						<option value="벤틀리">벤틀리</option>
						<option value="부가티">부가티</option>
						<option value="뷰익">뷰익</option>
						<option value="사이언">사이언</option>
						<option value="새턴">새턴</option>
						<option value="스즈키">스즈키</option>
						<option value="아큐라">아큐라</option>
						<option value="알파로메오">알파로메오</option>
						<option value="어울림모터스">어울림모터스</option>
						<option value="애스톤마틴">애스톤마틴</option>
						<option value="이스즈">이스즈</option>
						<option value="폰티악">폰티악</option>
						<option value="허머">허머</option>
						<option value="기타제조사">기타제조사</option>
					</select>
					<label for="car-name"></label>
					<input type="text" id="car-name" placeholder="차량 명" required>
					<label for="car-number"></label>
					<input type="text" id="car-number" placeholder="차량 번호" required>
				</fieldset>
			</form>
			<div class="photo">
				<div v-if="!image">
    			<h2>사진을 올려주세요</h2>
    			<input type="file" @change="onFileChange">
  			</div>
  			<div v-else>
    			<img class="photo-zone" :src="image">
    			<button @click="removeImage">Remove image</button>
  			</div>
			</div>
			<form>
				<fieldset>
					<legend>상세 설명</legend>
					<label for="detail-desc"></label>
					<textarea id="detail-desc" placeholder="상세 내용을 입력해 주세요." aria-setsize="50"></textarea>
				</fieldset>
			</form>
			<form class="checkbox">
				<fieldset>
					<legend>추가 선택사항</legend>
					<label for="insurance">보험수리</label>
					<input type="checkbox" id="insurance">
					<label for="rent">렌트카</label>
					<input type="checkbox" id="rent">
					<label for="pickup">픽업 서비스</label>
					<input type="checkbox" id="pickup">
					<label for="id-number">차대번호</label>
					<input type="checkbox" id="id-number">
				</fieldset>
			</form>
			<form>
				<fieldset>
					<legend>휴대전화 번호</legend>
					<label for="phone-number"></label>
					<input type="text" placeholder="휴대전화 번호를 입력해 주세요. (-제외)" id="phone-number">
				</fieldset>
			</form>
			<button type="submit" class="submit-btn">수리 견적 요청</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				image: ''
			}
		},
		methods: {
			onFileChange(e) {
				let files = e.target.files || e.dataTransfer.files;
				if(!files.length)  
					return;
					this.createImage(files[0]);
			},
			createImage(file) {
      	let image = new Image();
      	let reader = new FileReader();
      	let vm = this;

      	reader.onload = (e) => {
        	vm.image = e.target.result;
      	};
      	reader.readAsDataURL(file);
    	},
			removeImage: function (e) {
      	this.image = '';
    	}
		}
	}
</script>

<style scoped>
	legend {
	background-color: lightpink;
	position: absolute;
	left: -999em;
}
	body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  background-image: url(../../assets/images/car-repairing.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
h1,p{
  margin: 0;
  padding: 0;
}
.wrap {
  max-width: 960px;
  min-width: 480px;
  margin: 0 auto;
}
.dim {
  position: absolute;
	top: 0;
	left: 0;
	background-color: #000;
	opacity: 0.5;
	width: 100%;
	height: 100%;
	z-index: -1;
}
/*헤더*/
.header {
  background: rgba(44, 62, 80, 0.90);
  padding: 1.5rem 0;
}

/* 로고 */
.logo {
	background: #fff;
	margin: 0 auto 2rem;
	display: block;
  width: 8rem;
  padding: .8rem;
  border-radius: 5px;
  color: #ECF0F1;
  text-align: center;
  font-size: 1rem;
}
.logo img {
	width: 100%;
}
/* 전체 wrapper */
.wrapper {
  background-color: rgba(236, 240, 241, 0.8);
  width: 70%;
  min-width: 24rem;
  margin:2rem auto 0;
  padding: 2rem 0;
  box-shadow: 2px 2px 4px #2a2a2a, 4px 4px 8px #2a2a2a;
	text-align: center;
}

.wrapper > a {
	font-size: 0.9rem;
	color: #fff;
	background-color: #2c3e50;
	padding: 0.3rem 1.2rem;
}
.wrapper > a:hover {
	color: #2c3e50;
	background-color: #fff;
	transition: 0.5s all;
}
.modal_content {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	opacity: 0;
	transition: opacity 300ms ease-in;
	pointer-events: none;
}
.modal_content:target {
	opacity: 1;
	pointer-events: auto;
}
.modal_content > div {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 30%;
	height: 60%;
	background-color: rgba(44, 62, 80, 0.8);
	padding: 0 10px;
}
.modal-header {
	line-height: 30px;
}
.modal-header h3 {
	float: left;
	margin: 10px 0 10px 10px; 
	color: #fff;
	font-size: 1.8rem;
}
.modal-header p {
	float: left;
	margin: 10px 10px;
	color: #fff;
}
.modal-header a {
	float: right;
	padding: 5px 10px;
	margin: 5px 10px;
	color: #fff;
}
.modal-header::after {
	display: block;
	content: "";
	clear: both;
	height: 1px;
	width: 100%;
	background-color: #ecf0f1;
}
.modal-main {
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	margin: 30px 0 0 0;
}
.modal-btn {
	background-color: #fff;
	width: 25%;
	padding: 15px 0;
	border: 1px solid #ecf0f1;
	color: #2c3e50;
}
.photo {
	margin-top: 30px;
}
.photo-zone {
	max-width: 30%;
	max-height: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
/* 폼 */
.wrapper form {
	margin-top: 1rem;
}
.wrapper fieldset {
	display: inline-block;
	border: none;
}
.wrapper input {
	padding: .3rem 0 .3rem .1rem;
	border: none;
}
.wrapper select {
	border: none;
	padding: .3rem;
}
#detail-desc {
	width: 425px;
	height: 100px;
	border: none;
	padding: 0.8rem;
}
.checkbox {
	border: none;
	display: inline-block;
}
#phone-number {
	width: 425px;
	padding: .3rem;
}
.submit-btn {
	margin-top: 50px;
	width: 30%;
 border-radius: 3px;
 background-color: #34a77b;
 border: none;
 color: #fff;
 height: 30px;
}
</style>