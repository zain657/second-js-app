var btn =document.getElementById('btn');
var quote =document.getElementById('quote');
var author =document.getElementById('author');






/*--------------------------------The first way--------------------------------*/

// var quoteArray=[
//     {
//         quote:"“Be yourself; everyone else is already taken.”",
//         author:"― Oscar Wilde"
//     },
//     {
//         quote:"“So many books, so little time.”",
//         author:"― Frank Zappa"
//     },
//     {
//         quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
//         author:"― Albert Einstein"
//     },
//     {
//         quote:"“A room without books is like a body without a soul.”",
//         author:"― Marcus Tullius Cicero"
//     },
//     {
//         quote:"“You only live once, but if you do it right, once is enough.”",
//         author:"― Mae West"
//     },
//     {
//         quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
//         author:"― Robert Frost"
//     },
//     {
//         quote:"“If you tell the truth, you don't have to remember anything.”",
//         author:"― Mark Twain"
//     }
// ]

// var curenntIndex;
// var previousIndex;
// function index(){
//     previousIndex=curenntIndex;
//     curenntIndex= Math.floor(Math.random() * (quoteArray.length - 1));
// }
// document.addEventListener('DOMContentLoaded',index);


// function display(){
//     index()
//     if(previousIndex===curenntIndex){
//         return index();
//     }
//     console.log(curenntIndex+'first')
//     console.log(previousIndex+'second');
//     author.innerHTML=quoteArray[curenntIndex].author;
//     quote.innerHTML=quoteArray[curenntIndex].quote;
// }


// btn.onclick=function(){
//     display();
// }



/*---------------------------The second way-----------------------------------*/


const apiUrl='https://api.quotable.io/random';

async function getText(){
    try{
        const response=await fetch(apiUrl);
        const data=await response.json();
        quote.innerHTML=`<p>“${data.content}“</p> `;
        author.innerHTML=`<p>--${data.author}</p>`
        console.log(data);
    }
    catch(error){}
}




document.getElementById("btn").onclick = function () {
    getText();
}