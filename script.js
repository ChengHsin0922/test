window.onload = function () {
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const hamBar = document.querySelector('.hamBar')

    toggleBtn.onclick = function () {
        hamBar.classList.toggle('open')
    }

}
function changeContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');
}
function changeImage(imageId) {
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        image.classList.remove('open');
    });
    const selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('open');
}
function changeDescription(descriptionId) {
    const description = document.querySelectorAll('.description');
    description.forEach(description => {
        description.classList.remove('show');
    });
    const selectedDescription = document.getElementById(descriptionId);
    selectedDescription.classList.add('show');
}

let options = {
	'speed': 3000,
	'pause': true,
}


// 影評輪播圖
var swiper = new Swiper(".slide_content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
