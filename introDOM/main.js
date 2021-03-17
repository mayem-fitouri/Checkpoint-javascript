//getElementById
var title=document.getElementById('title')
console.log('title:',title)
console.log(title.innerHTML)
console.log(title.textContent)
//Modifier title avec js
title.textContent='title with js'
//getElementsByTagName
var tagName=document.getElementsByTagName('div')
console.log(tagName)
console.log(tagName[0])
// getElementsByClassName
var className=document.getElementsByClassName('card-body')
console.log(className)
//querySelector
var quer=document.querySelector('.card-body')
console.log(quer)
//querySelectorAll
var querAll=document.querySelectorAll('.card-body')
console.log(querAll)
//createElement (exp button)
var btn=document.createElement('button')
console.log(btn)
btn.textContent='Click me'
//removeChild
var links=document.getElementsByTagName('a')
console.log(links)
tagName[2].removeChild(links[0])
tagName[2].removeChild(links[0])
//Ajouter btn au lieu de link
tagName[2].appendChild(btn)
//replaceChild
var title2=document.createElement('h3')
title2.textContent='Abou kacem CHEBBI'
tagName[1].replaceChild(title2,title)
////setAttribute
title2.setAttribute('class','xx')
title2.setAttribute('class','title-class')
//changing title color(style with js)
title2.style.color='pink'
//add event listener click
btn.addEventListener('click',function(){
    var i=document.querySelector('i');
    if(i.classList.contains('icon-left')){
        i.classList.remove('icon-left');
        i.classList.add('icon-right')


    }else{
        i.classList.remove('icon-right');
        i.classList.add('icon-left')
    }})

