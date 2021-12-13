

function anotherFunction(value){
    return new Promise(function(resolve, reject) {
        setTimeout(()=>{resolve(value)}, 2000);
        //reject(value+1);
    })
}

async function main (){
   await anotherFunction(10)
    .then (resolve => console.log("resolve 1: " + resolve))
    .catch (reject => console.log("reject 1: " + reject))
   console.log("2");
   setTimeout(() => {console.log("after timeout")}, 3000);
}

main();