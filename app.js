const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

//디폴트 검정색 
ctx.strokeStyle="#2c2c2c";

//픽셀다룸. 크기지정
ctx.lineWidth = "2.5";


let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

//마우스 움직임 좌표
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); //path 그리기
        ctx.moveTo(x,y); //옮기기
        console.log("!painting");
    } else{
         ctx.lineTo(x,y); //첫번째 두번째 잇기?
         ctx.stroke(); // 획으로 그리기
         console.log("parinting");
    }
}

// function onMouseDown(event){
//     painting = true;
// }
 
function handleColorClick(event){
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    console.log(color);
}

if(canvas){ 
    canvas.addEventListener("mousemove", onMouseMove);
    //캔버스를 클릭했을때 좌표
    canvas.addEventListener("mousedown", startPainting);
    //페인팅이 끝나면 다시 false 값이 되어야함.
    canvas.addEventListener("mouseup", stopPainting)
    //페인팅하다가 캔버스를 벗어났을때
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));