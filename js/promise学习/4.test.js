function promiseAll(promises){
    return new Promise((resolve,reject) => {
        let results = []
        let count = 0
        for(let i=0;i<promises.length;i++){
            promises[i].then(result => {
                results[i] = result
                count++
                if(count === promises.length){
                    resolve(results)
                }
            }).catch(reject)
        }
    })
}