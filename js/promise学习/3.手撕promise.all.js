function promiseAll(promises){
    return new Promise((resolve,reject) => {
        let results = []
        let count = 0
        for(let i=0;i<promises.length;i++) {
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

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3])
  .then(results => {
    console.log('Result:', results); // Output: [1, 2, 3]
  })
  .catch(error => {
    console.error('Error:', error);
  });