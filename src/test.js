const new_array = [];
let i = 0;
function test(something) {
    while (new_array.length < 7) {
        console.log("working")
        console.log(new_array)
        if (!new_array.includes(something[i])) {
            new_array.push(something[i])
        }
        i = i + 1;
  }
  return new_array;
}

test([1, 2, 4, 5, 6, 7])

//Study about Asynchronous JavaScript from MDN Docs

console.log("This will print first")
setTimeout(() => { console.log("This will print last"), 1000 })
console.log("This will print second")

//Fetching data from APIs
// let response = await fetch("https://dog.ceo/api/breed/hound/list")
// let body = await response.json() 

// console.log(body)
// writing the above code like that will make it return a pending promise, we don't need a promise, we need
// a response, then we use await to tell the browser to wait till it brings a response before it continues



// or you can use the then method on the fetch
let response1 = fetch("https://dog.ceo/api/breed/hound/list").then((value) => {console.log(value)})