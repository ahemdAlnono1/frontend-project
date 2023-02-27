let allWords = "Chemistry is the scientific study of the properties and behavior of matter.[1] It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances."
let words = allWords.split(" ");

let buttons = document.querySelectorAll("button")
buttons.forEach(function(button , key , parent){
    button.onclick = function(){
        document.querySelector(".select-difficulty").style.display = 'none'
        document.querySelector('input').focus();
    }
})
const Words = document.querySelector('.words')
for(let j = 0 ; j < words.length ; j++){
    let span = document.createElement('span');
    Words.appendChild(span);
    span.innerText = `${words[j]} \r `;
}
const spans= document.querySelectorAll('span');
const input = document.querySelector('input');
let i = 0;
let time;
let firstInput = 0;
var seconds = 60;
var typeTime = 0;
window.onload = function(){
    input.focus()
    document.querySelector(".wellcome").style.marginLeft = "50%";
}
// # way to count
input.addEventListener('input' , function(){
    if (firstInput == 0){
        document.querySelector('.start').style.opacity = 1;
        var cancel = setInterval(incrementSeconds, 1000);
        firstInput +=1;}
    });
    // # end

    // ## start counting time
    var counter = document.getElementById('seconds-counter');
    counter.innerText = seconds + ": seconds"
    function incrementSeconds() {
        seconds -= 1;
        typeTime += 1;
        counter.innerText = seconds + ": seconds";
        if(seconds == 0){
            window.clearInterval(1);
        }
    }
    // ## end counting time

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    else if (event.key === ' '){
        event.preventDefault(); 
        if (input.value === words[i]){
            spans[i].style.color = 'white'
            input.value = ''
            if(i === words.length-1){
                let time2 = (seconds > 30)? Math.round(((i+1)/(60-seconds))*60)
                : Math.round(((i+1)/(seconds))*60);
                document.querySelector('.start').innerText = `your speed is ${time2} wbm`;
                window.clearInterval(1);
            } else if(seconds == 0){
                    let time2 =  Math.round(((i+1)/(typeTime))*60);
                    document.querySelector('.start').innerText = `your speed is ${time2} wbm`;
                    window.clearInterval(1);
              }
            i++;
        }
        else{
            spans[i].style.color = 'red'
        }
    }
  }); 