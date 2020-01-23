import {clearBoard} from "./dom_manipulations.js"
// save data from board to array
export function getDataFromBoard() {
    let boardDataObj = {
      boardName: 'No name board',
      stages: []
    };

    let userData = document.getElementsByClassName('new_board_td');
    let boardName = document.getElementById('bord-name').value;
    if(boardName !== ''){
        boardDataObj.boardName = boardName;
    }

    for(let stage of userData){
        let cardStage = []; // 0: New, 1: InProgress, 2: Test, 3: Done
        boardDataObj.stages.push(cardStage);
        for(let i=0; i<stage.children.length; i++){
            if(stage.children[i].children[0].value !== ""){
            cardStage.push(stage.children[i].children[0].value);
            }
        }
    }
    console.log(boardDataObj);
    return (boardDataObj);
}