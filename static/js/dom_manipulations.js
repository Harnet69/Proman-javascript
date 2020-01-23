// clear all data from a board
export function clearBoard() {
    document.getElementById('bord-name').value = ''; // clear board's name

    let userData = document.getElementsByClassName('new_board_td');
    for(let stage of userData){
        let stageChildrenLength = stage.children.length-1;
        for(let i=stageChildrenLength; i>=0; i--){
            stage.children[i].remove();
        }
    }
}