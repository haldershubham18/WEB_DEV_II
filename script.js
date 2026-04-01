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

// function print(num){ //higher order fun
//     setTimeout(() =>{
//         console.log("Inside print")
//         num()
        
//     },2000)
// }

// function sample(){ //callback fn
//     console.log("Inside  callback")
// }
// print(sample)

// console.log("Starting homework....");
// setTimeout(() => {
//     console.log("Homework Done");
//     console.log("starting dinner....");

//     setTimeout(() => {
//         console.log("dinner done");
//         console.log("Getting ready for bed....");

//         setTimeout(() => {
//             console.log("going to playground");
//             }, 1000); //after dinner
            
//         }, 1000); //after homework
        
//     }, 1000); //after dinner
    
// function finishHomework(callback) {
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }

// function eatDinner(callback) {
//     console.log("Starting dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500);
// }

// function goToPlayground() {
//     console.log("Going to the playground!");
// }

// // Chained in steps, but cleaner
// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// });



//---------Promises---------
// work to be done if the work of the asyn code is done
// then --> if resolved
// catch --> if rejected
// finally --> after any of the above is excuted 

// const p=new Promise((resolve,reject)=>{
//     let done= false;
//     setTimeout(() => {
//         if(done){
//             resolve({name:"john",age:18})
//         }else{
//             reject("work has not been resolved")
//         }
        
//         //resolve("resolved")
//         //resolve()
//     },5000)
// })
// p.then((data)=>{
//     console.log(data.name)
// }).catch((error)=>{
//     console.log(error)
// }).finally(() => {
//     console.log("finally Block");
// })


// ---------promise chaining---------

// function finishHomework() {
//     const p = new Promise((res,rej)=>{
//         let done = true;
//         setTimeout(()=>{
//             if (done){
//                 console.log("homework done")
//                 res("homeWork is done");
//             }else{
//                 rej("homework not done");
//             }
//             },2000)
//         })
    
//     return p;
// }

// function eatDinner() {
//     const p= new Promise((res,rej)=>{
//         let done =true;
//         setTimeout(()=>{
//             if (done){
//                 console.log("dinner done")
//                 res("dinner is done");
//             }else{
//                 rej("dinner not done");
//             }
//             },2000)
//         })
//     return p;
// }

// function goToPlayground() {
//     const p= new Promise((res,rej)=>{
//         let done = true;
//         setTimeout(()=>{
//             if (done){
//                 console.log("going to playground");
//                 res("play time");
//             }else{
//                 rej("not going to playground");
//             }
//             },2000)
//     })
//     return p;

// }


// finishHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("go to sleep")
// })


// ---------async await---------

// async function dailyRoutine(){
//     try{
//         const homework= await finishHomework(); 
//         console.log(homework)
//         const dinner= await eatDinner();
//         console.log(dinner)
//         const playground= await goToPlayground();
//         console.log(playground)
//     }catch(err){
//         console.log(err)
//     }
//     finally{
//         console.log("go to sleep")
//     }
// }

// dailyRoutine()  

//-----------------Error--------------
// async function getData(){
//     const response = await fetch ("https://dummyjson.com/products")
//     const data = await response.json()
//     data.products.forEach((product)=>{
//         console.log(product.title)
//     })
// }

// getData()

// async function getData(){
//    try{
//     const response = await fetch ("https://dummyjson.com/products")
//    if(response.ok===false){
//         throw new Error("Something went wrong")
//    } 
    
//     console.log (response)
//     const data = await response.json()
//     console.log(data)
//     data.products.forEach((product)=>{
//         console.log(product.title)
//     })
// }catch(e){
//     console.log(e)
// }
// }

// getData()
// async function getData({
//     try{
//         const response= await fetch("https://dummyjson.com/products",{
//             method: "POST"
//             headers: {"Content-Type" :"application/json"}
//             body : JSON.stringify({
//                 title: "Macbook M5",
//                 price: 100000,
//                 decription :"latest Mackbook with M5 chip",
//                 category: "laptop",
//                 thumbnail:"htpps://example.com/macbook-m5.jpg"

//     })

//     })
// }
// })


// ---------------------- Local Storage--------------------
// localStorage.setItem("name","ren")
// localStorage.setItem("age",23)

// const uname=localStorage.getItem("name")
// console.log(uname)
// console.log(localStorage.getItem("age"))

// localStorage.removeItem("name")
// localStorage.clear()

//----------- session storage-------------

// sessionStorage.setItem("name","ren")
// sessionStorage.setItem("age",23)

// const uname=sessionStorage.getItem("name")
// console.log(uname)
// console.log(sessionStorage.getItem("age"))

// sessionStorage.removeItem("name")
// sessionStorage.clear()

// ------- cookie------------
// document.cookie="name=ren; expires=Thu,20 Feb 2026 12:00:00 UTC"
// document.cookie="age=25; expires=Thu,20 Feb 2026 12:00:00 UTC"
// console.log(document.cookie)

// async function fetchData(){
//     await fetch("https:\\127.0.0.1")
// }


