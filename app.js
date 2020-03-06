const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//디폴트 검정색 
ctx.strokeStyle="#INITIAL_COLOR";

//픽셀다룸. 크기지정
ctx.lineWidth = "2.5";

ctx.fillStyle ="INITIAL_COLOR";
 

let painting = false;
let filling = false; 

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
    ctx.fillStyle = color;
    console.log(color);
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
    console.log(event.target.value);
}

function handleModeClick(){
    //클릭하면 fill,paint 문구 바꾸기
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else{
        filling = true;
        mode.innerText = "Paint";
    }
}

//canvas 색 전체 채우기
function handleCanvasClick(event){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 
    }
}

if(canvas){ 
    canvas.addEventListener("mousemove", onMouseMove);
    //캔버스를 클릭했을때 좌표
    canvas.addEventListener("mousedown", startPainting);
    //페인팅이 끝나면 다시 false 값이 되어야함.
    canvas.addEventListener("mouseup", stopPainting)
    //페인팅하다가 캔버스를 벗어났을때
    canvas.addEventListener("mouseleave", stopPainting);
    //색 채우기
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}