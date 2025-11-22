const learnButton=document.querySelectorAll(".learn-btn");
learnButton.forEach(items =>{
items.addEventListener('click',()=>{
window.location.href="store.html";
});
});
function outer() {
    let count=0;
    function inner() {
        count ++;
        console.log(count);
    }
    return inner;
}
const counter= outer();
counter();
counter();
counter();
counter();