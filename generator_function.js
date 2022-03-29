// function *naturalNumbers(){
//     let number=1;
//     while(true) yield number++;

// }
// var naturalNumberIterator=naturalNumbers();
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);
// console.log(naturalNumberIterator.next().value);




// to call another generator from within a generator



// function*anotherGenerator(name){
//     yield `From another Generator,${name}`
// }

// function* myGenerator(name){
//     yield `Hi ${name}`;
//     yield* anotherGenerator(name)
//     yield "Bye!"

// }
// let gen=myGenerator("shiv")
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



// passing argument into generators


// function* myGenerator(){
//     console.log("Hey",yield);
//     console.log("Are you ",yield)
// }

// let gen=myGenerator();
// gen.next();
// gen.next("ujala");
// gen.next("praveen");



// function* yieldAndReturn(){
//     yield "Y";
//     return "R";
//     yield "unreachable";
    

// }

// var gen =yieldAndReturn();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



// function* myGenerator(name){
//     yield `hi ${name}`;
//     yield "Bye!";

// }

// let gen =myGenerator("shiv");
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



// function* generator(){
//     yield "Yield No.1";
//     yield "Yield No.2";
//     yield "Yield No.3";
// }

// let g =generator();
// for(let value of g){
//     console.log(value);

// }



// function* generator(){
//     let nextNum=300;
//     while(true){
//         yield(nextNum++);
//     }
// }

// let g=generator()
// for(let value of g){
//     if (value>305){
//         break;
//     }
//     console.log(value);
// }


// function* generator(){
//     let result= (yield)*10;
//     console.log(`Result:${result}`);
// }

// let g= generator();
// g.next()
// g.next(500)


// function* generator(){
//     let yArry=[yield,yield,yield];
//     console.log(`Result: ${yArry}`);
// }

// let g=generator();
// g.next();
// g.next(300);
// g.next(700);
// g.next(765);


// function* generator(){
//     yield 55;
//     yield["ujala ,Praveen,Anzum,savita"]
// }

// a=generator()
// console.log(a.next());
// console.log(a.next());


// var arr1=[1,2,3,4,5]
// var arr2=[3,7,8,9]
// var c=[...arr1,...arr2]
// console.log(c)

// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//         iterationCount++;
//         yield i;
//     }
//     return iterationCount;
// }
// m= makeRangeIterator()
// console.log(m.next())
// console.log(m.next())

// "use strict"
// function test(a,b,b){
//     console.log(a+b+b)
// }
// test(10,20,30)



// a=10

// function test(){
//     "use strict"
//     var b=20
//     console.log(b)
// }
// test()