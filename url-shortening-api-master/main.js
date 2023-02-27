const links = document.querySelector('#my-links');
const link = document.querySelector('.link');
const add = document.querySelector('.add');
const input = document.querySelector('.url');

let theLinks = []
function addLink(){
    for(let i = 0 ; i< theLinks.length ; i++){
        let div = document.createElement('div')
        div.className = 'link';
        let aLink = document.createElement('a');
        let textArea = document.createElement('textarea');
        let span = document.createElement('span');
        let buttonCopy = document.createElement('button');
        let buttonDelete = document.createElement('button');
        buttonDelete.innerText = "delete";
        buttonDelete.className = 'delete'
        aLink.innerText = theLinks[i].name;
        aLink.href = theLinks[i].href;
        aLink.target = '_blank'
        textArea.innerText = theLinks[i].href;
        textArea.readOnly = true;
        textArea.className = 'short'
        buttonCopy.innerText = 'copy';
        buttonCopy.className = 'copy';
        span.className = 'short-span';
        span.innerText = theLinks[i].href;
        div.appendChild(aLink);
        div.appendChild(textArea);
        div.appendChild(span);
        div.appendChild(buttonCopy);
        div.append(buttonDelete)
        links.append(div);
    }}
    addLink();
    if(!window.localStorage.getItem('theLinks')){
        window.localStorage.setItem("theLinks" , JSON.stringify(theLinks));
        console.log(window.localStorage.getItem('theLinks'));
    }else{
        let local = JSON.parse(window.localStorage.getItem('theLinks'));
        theLinks.push(local);
    }
    
    add.addEventListener('click' , function(e){
        e.preventDefault();
        let url = document.querySelector('.url');
        let name = document.querySelector('.url-name');
        theLinks.push({
            name: name.value,
            href: url.value,
        });
        let allLinks = document.querySelectorAll('.link');
        
        allLinks.forEach(function(link ,index){
            link.remove();
        })
        window.localStorage.setItem('theLinks' , JSON.stringify(theLinks))
        theLinks = JSON.parse(window.localStorage.getItem('theLinks'));
        addLink();
        location.reload();
    })
theLinks = JSON.parse(window.localStorage.getItem('theLinks'));
addLink();

const copys = document.querySelectorAll('button.copy');

    copys.forEach(function(copy , index){
        copy.addEventListener('click', function(event) {
            copys.forEach(function(copy){
                copy.innerText = 'copy';
            })
            var text = document.querySelectorAll('.short')[index];
            text.focus();
            text.select();
            copy.innerText = 'copied'
            try {
              var successful = document.execCommand('copy',true , text.innerHTML);
            } catch (err) {
              console.log('Oops, unable to copy');
            }
          });
    });