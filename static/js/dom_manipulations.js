// clear all data from a board
export function clearBoard() {
    document.getElementById('bord-name').value = ''; // clear board's name

    let userData = document.getElementsByClassName('new_board_td');
    for(let stage of userData){
        for(let i=0; i<stage.children.length; i++){
            stage.children[i].remove();
        }
    }
}