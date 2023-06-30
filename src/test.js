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