const head = document.querySelector("#head")
const dateSmall = document.querySelector("#head small");
const clock = document.querySelector("#head span:last-child");
clock.innerText = "00:00";

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");
    clock.innerText =`${hours}:${min}:${sec}`;
}
getClock();
setInterval(getClock, 1000)


function getTime(){
    const date = new Date();
    const mdy = date.toDateString().split(" ");
    const mm = mdy[1];
    const dd = mdy[2];
    const yy = mdy[3];
    return `${mm} ${dd} ${yy}`;

}
dateSmall.innerText = getTime();