const btn = document.querySelector(".btn");
const disNon = document.querySelector('.dis-non');

btn.addEventListener("click",()=>{
    disNon.style.display = "block";
    btn.style.display = "none";
})

// const Header = document.querySelector(".Header");
// const divOne = document.querySelector(".one");

// const letter = "HAPPY";
//     const letter1="BIRTH";
//     const letter2 = "DAY";
//     const chit = "CHITLAY";
    
// const splitLet = (leter)=>{
//     return leter.split('');
// }

// const H1 = document.createElement("h1");

// const lett = splitLet(letter).map((lett)=>{
//     return lett;
// })
// H1.append(lett);
// divOne.append(H1);
// console.log(lett);