function message(event)
{
    console.log(event.key);
}

//let btn=document.querySelector("button");
//btn.classList.add("btn");
//console.log("hello")

// btn.addEventListener("keydown",message);
// const form=document.querySelector("form")
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("form submitted")
// })


// console.log("first line")
// setTimeout(() => {console.log("after 5 seconds")},5000);
// console.log("last line")

// setTimeout(() => {
//     alert("line after 2 seconds")
// }, 2000);

// const timerID=setInterval(()=>{console.log("set interval after 1 second")},1000);
// const timeoutID=setTimeout(() =>{clearInterval(timerID)},10000)
// clearTimeout(timerID)

// let count=1;
// const id=setInterval(() => {
//     if(count===10)clearInterval(id);
//     console.log(count)
//     count+=1;
// },1000)

// const name=document.querySelector("#name")
// const btn=document.querySelector("#btn")
// const list=document.querySelector(".list")
// btn.addEventListener("click",()=>{
//     if(name.value===""){
//         alert("please enter a name")
//         return; 
//     } 

//     const li=document.createElement("li")
//     const dlt=document.createElement("button")
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
//     name.value=""
// })

// function print(num){
//     console.log("inside print")
//     num()
// }

// function callback(){
//     console.log("inside callback")
// }

// print(callback)

function print(num){
    setTimeout(() =>{
        console.log("Inside print")
        num()
        
    },2000)
}

function sample(){ //callback fn
    console.log("Inside  callback")
}
print(sample)