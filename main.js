let text = document.getElementById("text");
const arr = ["Гузель", "гузель", "Guzel", "guzel", "Gusel", "gusel"];
let check = (str) => arr.indexOf(str.trim()) != -1 ? true : false;
document.getElementById("button").onclick = () => {
    let name = document.getElementById("input").value;
    text.innerHTML = check(name) ? `${name} - милая кисонька!` : `${name} - вовсе не кисонька!`; 
}