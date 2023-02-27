const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
let colors = document.querySelectorAll('.colors')
let color1=   document.querySelector('.active')


let input = document.querySelector('input')
input.addEventListener('input' , ()=>{
    console.log(input.value)
    ctx.lineWidth = input.value;
})


colors.forEach(function(color){
    color.addEventListener('click' , function(){
        document.querySelector(".active").classList.remove("active");  
        color.classList.add('active')
        // console.log(`the ${color.id} color is ${color.classList}`)
        // console.log(`the color is ${color.getAttribute('color-data')}`)
        
    })
})

window.addEventListener('load' , ()=>{
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    
    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variables

    let painting = false;
    // Event listener
    function startPosition(e){
        painting = true;
        draw(e)
    }
    function endPosition(){
        painting = false
        ctx.beginPath();
    }
    function draw(e){
        if (!painting){
            return;
        }
        ctx.lineWidth = input.value ;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX ,e.clientY);
        // ctx.strokeStyle = '#ff0000'
        ctx.strokeStyle = document.querySelector('.active').getAttribute('color-data')
        ctx.stroke();   
 
        ctx.moveTo(e.clientX , e.clientY)
    }
    canvas.addEventListener('mousedown' , startPosition )
    canvas.addEventListener('mouseup' , endPosition)
    canvas.addEventListener('mousemove' , draw)
})
window.addEventListener('resize' , ()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})



