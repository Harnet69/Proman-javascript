// add listener to up arrow to open/close boards details
export function boardDetails() {
    let showBoarder_Details_btn = document.getElementById('show_boarder_details');
    let boardDetails = document.getElementById('board_details');
    let newCardButton = document.getElementById('add_new_card');

    showBoarder_Details_btn.addEventListener('click', function () {
        boardDetails.classList.toggle('elem_hide');
        newCardButton.classList.toggle('elem_hide');
    })
}

// add listener to add new board button
export function newBoard() {
    let new_board_btn = document.getElementById('new_board_btn');
    let newBoard = document.getElementById('new_board');

    new_board_btn.addEventListener('click', function () {
        newBoard.style.display = 'block';
    })
}

// add listener to create a new card button
export function newCard() {
    let addNewCardBtn = document.getElementById('add_new_card');
    let stageNewCol = document.getElementById('stage-new');

    addNewCardBtn.addEventListener('click', function addNewCardBtn () {
        let newCard = document.createElement('li');
        newCard.classList.add('card');
        stageNewCol.appendChild(newCard);
    });
}