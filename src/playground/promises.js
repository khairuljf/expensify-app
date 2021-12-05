const promises =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is my resolve data');
        resolve('Other resolve resutl')
    }, 500)

});


promises.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error', error)
})
