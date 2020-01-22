// create new board
export function getDataFromBoard() {
    let boardName = document.getElementById('bord-name');

    let stageNew = document.getElementById('stage-newcards');
    let stageInProgress = document.getElementById('stage-inprogress');
    let stageTesting = document.getElementById('stage-testing');
    let stageDone = document.getElementById('stage-done');

    let userData = document.getElementsByClassName('new_board_td');
    for(let stage of userData){
        for(let i=0; i<stage.children.length; i++){
            console.log(stage.children[i].children[0].value)
        }
    }
}