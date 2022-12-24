let count =0;
let countEl = document.getElementById("count-el"); // pass in arguments
let saveEl = document.getElementById("saveEl");
function increment() {
    count +=1;
    countEl.textContent = count;

}

//use testContent or innerText(will not render the styling)

function save() {

    let storeCount = count + "-";

    saveEl.textContent += storeCount;
    countEl.textContent = 0;
    count=0;

    console.log(count);
}




