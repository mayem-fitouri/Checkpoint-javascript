//getting increment buttons
var increment=document.querySelectorAll('.btn-outline-success')
console.log(increment)
var decrement=document.querySelectorAll('.btn-outline-danger')
//
for (let i = 0; i< increment.length; i++) {
    increment[i].addEventListener('click',function(){
        increment[i].nextElementSibling.innerHTML++
    })
    
}
for (let i = 0; i< decrement.length; i++) {
    decrement[i].addEventListener('click',function(){
        decrement[i].previousElementSibling.innerHTML--;
    })
    
}