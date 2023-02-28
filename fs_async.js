const {readFile, writeFile} = require('fs');

// need to provide the callback function /// we run that callback when the functionality we are doing is complete., like addEveentListner in 
//js
console.log('start')
readFile('../comtent/first.txt',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    
    const read = readFile('../comtent/second.txt',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result

    writeFile(
        '../comtent/result_async.txt',`this is the async one ${first}, ${second}`
        , (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
            console.log('done')
        })
    
    })
})
console.log('next turn')
