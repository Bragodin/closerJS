function sequence(start, step){
    if (start === undefined){
        start = 0;
        step = 0;
    }
    let pred = start - step;
    return function (){
        pred = pred + step;
        return pred;
    }
}
let schet = sequence();
let schet2 = sequence();
console.log(schet());
console.log(schet());
console.log(schet2());
console.log(schet());
console.log(schet2());