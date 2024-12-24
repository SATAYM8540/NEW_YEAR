const dayBox=document.getElementById("day-box");
const hrBox=document.getElementById("hr-box");
const minBox=document.getElementById("min-box");
const secBox=document.getElementById("sec-box");

const targetDate=new Date("January 1,2025 00:00:00:00");
setInterval(updateCountdown,1000);

function updateCountdown(){
    const currentDate=new Date;
    const diff=targetDate-currentDate;
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff/(1000*60*60))%24);
    const minutes=Math.floor((diff/(1000*60))%60);
    const second=Math.floor((diff/1000)%60);

    dayBox.textContent=days<10 ? "0" + days : days;
    hrBox.textContent=hours<10 ? "0" + hours : hours;
    minBox.textContent=minutes<10 ? "0" + minutes : minutes;
    secBox.textContent=second<10 ? "0" + second: second;
}