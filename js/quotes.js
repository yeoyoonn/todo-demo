const quotes =[{
    quote: "Life was like a box of chocolates, you never know what you're gonna get.",
    author: "Forrest Gump"
},{
    quote: "Life isn't like in the movies. Life...is much harder.",
    author: "Nuovo cinema Paradiso"
},{
    quote: "It is true we can seldom help those closest to us",
    author: "A River Runs Through It"
}
]

const qouteSpan = document.querySelector("#quote p:first-child");
const authorSpan = document.querySelector("#quote p:last-child");

const todayQoute = quotes[Math.floor(Math.random() * quotes.length)];
qouteSpan.innerText =todayQoute.quote;
authorSpan.innerText = todayQoute.author;



