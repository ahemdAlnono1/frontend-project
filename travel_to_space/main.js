const a = document.querySelectorAll('header nav a');
const travelPlanes = document.querySelectorAll('.travel button');
a.forEach((ele)=>{
    ele.addEventListener('click' , (e)=>{
        e.preventDefault();
        document.querySelector('.active').classList.remove("active");
        ele.classList.add('active');
        document.querySelector('.home-body').style.display = 'none';
        document.querySelector('.dest-body').style.display = 'none';
        document.querySelector('.crew-body').style.display = 'none';
        document.querySelector('.tec-body').style.display = 'none';
        document.querySelector(`.${ele.id}`).style.display = 'block';
    });
});
const distCompImg = document.querySelectorAll('.dest-component img');
const planeImg = document.querySelector('.plane-img')
travelPlanes.forEach((ele)=>{
    ele.addEventListener('click' , (e)=>{
        e.preventDefault();
        document.querySelector('.active1').classList.remove("active1");
        document.querySelector(`.${ele.id}`).classList.add('active1');
        planeImg.src = `./assets/destination/image-${ele.id}.webp`
    });
});

const inputCrew = document.querySelectorAll('.crew-in input');

inputCrew.forEach(function(element){
    element.addEventListener('click' , function(){
        document.querySelector(".crew img").src = element.id;
        document.querySelector('.active2').classList.remove('active2');
        document.querySelector(`#${element.className}`).classList.add("active2");
    })
})
const aboutTravel = document.querySelectorAll('.about-travel button');

aboutTravel.forEach(function(button){
    button.addEventListener('click' , function(){
        document.querySelector('.active3').classList.remove('active3');
        button.classList.add('active3');
        document.querySelector('.active4').classList.remove('active4');
        document.querySelector(`.step${button.innerHTML}`).classList.add('active4');
        document.querySelector('.launch').src = `./assets/technology/image${button.innerHTML}.jpg`
    })
})