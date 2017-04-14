// 변수선언
var pagination = carousel.querySelector('.carousel-pagination');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
var totalItems = container.querySelectorAll('.carousel-item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function next(){
    slideTo(currentIndex + 1);
}

function prev(){
    slideTo(currentIndex - 1);
}
// 슬라이드
function slideTo(index){
    var container = carousel.querySelector('.carousel-container');
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}
// 슬라이드 좌우버튼, 슬라이드 뷰렛
bullets[currentIndex].classList.add('active-bullet');
var carousel = document.querySelector('.carousel');
carousel.querySelector('.carousel-prev').addEventListener('click', prev, false);
carousel.querySelector('.carousel-next').addEventListener('click', next, false);

pagination.addEventListener('click', function(e){
    var index = bullets.indexOf(e.target);
    if(index !== -1){
        slideTo(index);
    }
}, false);
