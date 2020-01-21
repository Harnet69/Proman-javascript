export function boardDetails() {
    let showBoarder_Details_btn = document.getElementById('show_boarder_details');
    let boardDetails = document.getElementById('board_details');
    let newCardButton = document.getElementById('add_new_card');

    showBoarder_Details_btn.addEventListener('click', function () {
        boardDetails.classList.toggle('elem_hide');
        newCardButton.classList.toggle('elem_hide');
    })
}

export function newBoard() {
    let new_board_btn = document.getElementById('new_board_btn');
    let newBoard = document.getElementById('new_board');

    new_board_btn.addEventListener('click', function () {
        newBoard.style.display = 'block';
    })
}