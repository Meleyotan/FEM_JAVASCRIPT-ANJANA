let x = "Meleyotan"
console.log(x)
// console.log(_.endsWith(x,"n"))

const menu = {
    lunch:{
        appetizer:"salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner:{
        appetizer:"samosa",
        main:"saag paneer",
        dessert: "gulab juam"
    }
};

const tiramisu = menu.lunch.dessert
console.log(tiramisu) 


const spices = [
    {name:"Emma", nickname: "Baby"},
    {name:"Geri", nickname: "Ginger"},
    {name:"Mel B", nickname: "Scary"},
    {name:"Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
]
const spiceGirls = {
    albums:["Spice", "SpiceWorld", "Forever"],
    motto:"Girl Power",
    members:spices
};

console.log(spiceGirls.motto)
console.log(spiceGirls.members[1].nickname)
console.log(spiceGirls.albums[1])
console.log(spiceGirls.members[4].name)

const players = [
    {name: "Player Y", symbol: "Y"},
    {name: "Player Z", symbol: "Z"}
]

function endsInY(something){
    if (something.endsWith("y")){
        return something
    }
}

//using the filter method
console.log(spices.filter((spice) => endsInY(spice.nickname)))