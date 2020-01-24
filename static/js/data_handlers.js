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
    // console.log(boardDataObj);
    saveBoardToLS(boardDataObj);

    return (boardDataObj);
}

// get boards data from localstorage
function getFromLocalStorage(name) {
    let dataFromLS = localStorage.getItem(name);
    return dataFromLS;
}

// save a board's data to a local storage
function saveBoardToLS(boardDataObj) {
    if(!localStorage.getItem('boards')){ // if we don't have boards in Local Store
        let boardDataArr = [boardDataObj];
        // boardDataArr.push(boardDataObj);
        let boardDataJson = JSON.stringify(boardDataArr);
        localStorage.setItem('boards', boardDataJson);
    }else{
        let newBoardArr = [];
        let oldBoardData = JSON.parse(getFromLocalStorage('boards'));
        for(let boar of oldBoardData){
            newBoardArr.push(boar);
        }
        newBoardArr.push(boardDataObj);
        let updatedData = JSON.stringify(newBoardArr);
        localStorage.setItem('boards', updatedData);
        console.log(updatedData);
    }
}