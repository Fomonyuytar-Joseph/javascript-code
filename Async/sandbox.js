// Async and Await
const getTodos=async()=>{
    const response= await fetch("marios.json");
    
    if(response.status!==200){
        throw new Error('cannot fetch data');
    }
    const data= await response.json();
   return data;


}
console.log(1);
console.log(2);
getTodos().then(data=>{
    console.log("resolved:",data);
}).catch(err=>{
    console.log('rejected:',err.message)
});
console.log(3);
console.log(4);










// fetch("luigi.json").then(response=>{
//     console.log("resolved",response);
//     return   response.json();
// }).then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log("rejected",err);
// })

















//older way of doing asynchronous programming
// const getTodos=(resource)=>{
//     return new Promise((resolve,reject)=>{
//     const request =new XMLHttpRequest();
// request.addEventListener('readystatechange',()=>{
//     if(request.readyState===4 && request.status===200){
//         const data= JSON.parse(request.responseText);
//         resolve(data);
//     }
//     else if(request.readyState===4){
//         reject('error getting resource ');
//     }
// });
// request.open('GET',resource);
// request.send();

// });

// };
// //promises
// getTodos("luigi.json").then(data=>{
//     console.log('promise 1 resolved ', data);
//     return getTodos("mario.json");
// }).then(data=>{
//     console.log('promise 2 resolved:',data);
//     return getTodos("shaun.json");
//  } ).then(data=>{
//      console.log("prmise 3 resolved:",data);
//  }).catch(err=>{
//     console.log('promise rejected', err);

// })
//promise example
// const getSomething=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("some data");
//     })
// // };
// getSomething("luigi.json").then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })














// getTodos('luigi.json',(err, data)=>{
//     console.log(data)
//     getTodos('mario.json',(err,data)=>{

//         console.log(data);
//     })
//     getTodos('shaun.json',(err,data)=>{
//         console.log(data);
//     })
//     // console.log("call backfired");
//     // if(err){
//     //     console.log(err);
//     // }else{
//     //     console.log(data)
//     // }

// });
