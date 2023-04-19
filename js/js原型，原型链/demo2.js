function Test(name){
    this.name = name
    console.log(this)
    return {age:26}
}

const t = new Test('wjx')
console.log(t)