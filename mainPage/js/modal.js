
var modal_btn = document.querySelector('.modal_btn')
var modal_window = document.querySelector('.modal_dim');
var modal_close_btn = document.querySelector('.modal_close_btn');

modal_btn.onclick = openModalWindow;
modal_close_btn.onclick = closeModalWindow;
 //지역분류 카테고리창 열기
function openModalWindow() {
  console.log('clicked open modal');
  modal_window.style.display = 'block';
}
// 지역분류 카테고리창 닫기
function closeModalWindow() {
  console.log('clicked close modal');
  modal_window.style.display = 'none';
}
