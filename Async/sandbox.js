const getTodos=(resource)=>{
    return new Promise((resolve,reject)=>{
    const request =new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    if(request.readyState===4 && request.status===200){
        const data= JSON.parse(request.responseText);
        resolve(data);
    }
    else if(request.readyState===4){
        reject('error getting resource ');
    }
});
request.open('GET',resource);
request.send();

});

};
getTodos("luigi.json").then(data=>{
    console.log('promise resolved ', data);
}).catch(err=>{
    console.log('promise rejected', err);

})
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
