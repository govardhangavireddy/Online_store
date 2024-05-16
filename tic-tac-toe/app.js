let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('.reset');
let res = document.querySelector('.winner');
let new_game = document.querySelector('.new-game');

let player_X = true;
let player_O = false;

const winning_pattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var count=0;
boxes.forEach((box) => {
    box.addEventListener("click",() => { 
        if(player_X){
            box.innerHTML = "X";
            box.style.color = "green";
            player_X = false;
            player_O = true;
            count++;

        }else{
            box.innerHTML = "O";
            box.style.color = "red";
            player_X = true;
            player_O = false;
            count++;
        }
        box.disabled = true;
        checkWinner();
        if(count == 9){
            res.innerHTML = "It's a draw";
            res.style.color = "white";
            res.classList.remove('hide');
            for(let box of boxes){
                box.disabled = true;
            }
        }
    })
    }
);

const resetGame = () => {
    player_X = true;
    for(let box of boxes){
        box.innerHTML = "";
        box.disabled = false;
    }
    res.classList.add('hide');
    count = 0;
}


const display_winner = (winner) => {
    res.innerHTML = `${winner} is the winner`;
    if(winner === "X"){
        res.style.color = "green";
    }
    else{
        res.style.color = "red";
    }
    res.classList.remove('hide');
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
    for(let pattern of winning_pattern){
        let b1 = boxes[pattern[0]].innerHTML;
        let b2 = boxes[pattern[1]].innerHTML;
        let b3 = boxes[pattern[2]].innerHTML;
        if(b1 != "" && b2 != "" && b3 != ""){
            if((b1===b2) && (b2===b3)){
                display_winner(b1);
            }
        }
    }
};

reset_btn.addEventListener("click", resetGame);
new_game.addEventListener("click", resetGame);
