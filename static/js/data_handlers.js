import {clearBoard} from "./dom_manipulations.js"
// save data from board to array
export function getDataFromBoard() {
    let boardData = [];

    let userData = document.getElementsByClassName('new_board_td');
    let boardName = document.getElementById('bord-name').value;
    boardData.push(boardName);
    for(let stage of userData){
        let cardStage = []; // 0: New, 1: InProgress, 2: Test, 3: Done
        boardData.push(cardStage);
        for(let i=0; i<stage.children.length; i++){
            cardStage.push(stage.children[i].children[0].value);
        }
    }
    clearBoard();
    clearBoard();
    clearBoard();
    console.log(boardData);
    return (boardData);
}