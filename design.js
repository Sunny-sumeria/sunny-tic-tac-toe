console.log("wlcome to tic tac toe");
let bgmusic = new Audio("gameBg.mp3");
let audioput = new Audio("put.wav");
let gameOver = new Audio("winSound.mp3");

let turn = "X";
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');

    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, 0, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],

    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            document.querySelector('.boxt').innerText = boxtext[e[0]].innerText + " won "
            document.querySelector(".line").style.transform = `translate (${e[3]}]vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "200px"

            // setTimeout(()=>{
            //     document.querySelector(".line").style.transform=" "},1000)


            gameOver.play()

            // bgmusic.pause()
            // bgmusic.currentTime = 0
            isgameover = true



            //   isgameover.pause()
            let a = document.querySelector('.imgBox').getElementsByTagName('img')
            console.log(a)
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = " 200px "
           
        }


    })
}

let box = document.getElementsByClassName("box");

Array.from(box).forEach(element => {
    let boxTextt = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        bgmusic.play();
        if (boxTextt.innerText === '') {
            boxTextt.innerText = turn;
            turn = changeTurn();
            audioput.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('boxt')[0].innerText = " Turn for " + turn
            }
        }
    })
})
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';

    });
    turn = "X"
    isgameover = false
    document.querySelector(".line").style.width = "0px"
    document.getElementsByClassName('boxt')[0].innerText = " Turn for " + turn
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = " 0px "
    bgmusic.pause()
    bgmusic.currentTime = 0

})