
// window.addEventListener("click", () => {
// console.log("You knocked?");
// })

window.addEventListener("click", event => {
let dot = document.createElement("div");
dot.className = "dot";
dot.style.left = (event.pageX-4 ) + "px";
dot.style.top = (event.pageY -4 ) + "px";
document.body.appendChild(dot);
});
window.addEventListener("keydown", event => {
if (event.key == "v") {
document.body.style.background = "violet";
}
});
window.addEventListener("keyup", event => {
if (event.key == "v") {
document.body.style.background = "";
}
})
let link=document.querySelector("a");
 link.addEventListener('click', e=>{
     console.log("nope");
     e.preventDefault();
  })
// let button = document.querySelector("button");
// button.addEventListener("mousedown", e => {
// if (e.button == 0) {
// console.log("Left button");
// } else if (e.button == 1) {
// console.log("Middle button");
// } else if (e.button == 2) {
// console.log("Right button");
// }
// });