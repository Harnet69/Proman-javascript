import {getDataFromBoard} from "./data_handlers.js";
// add listener to up arrow to open/close boards details
export function boardDetails() {
    let showBoarderDetailsBtn = document.getElementById('show_boarder_details');
    let boardDetails = document.getElementById('board_details');
    let newCardButton = document.getElementById('add_new_card');
    let arrowIco = document.getElementById('show_boarder_details');

    showBoarderDetailsBtn.addEventListener('click', function () {
        boardDetails.classList.toggle('elem_hide');
        newCardButton.classList.toggle('elem_hide');
        if(boardDetails.className === 'elem_hide'){
            arrowIco.setAttribute('src', "/static/img/down.png");
        }else{
            arrowIco.setAttribute('src', "/static/img/up.png");
        }
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
        newCard.innerHTML = "<textarea placeholder='Your task' rows=\"2\" cols=\"50\">\n" +
            "" +
            "</textarea>";
        newCard.classList.add('card');
        stageNewCol.appendChild(newCard);
    });
}

// export function cloneElement() {
//     let addbutton = document.getElementById("save_board");
//     let destBoard = document.getElementById("user-bords");
//     addbutton.addEventListener("click", function() {
//         let boxes = document.getElementById("board_details");
//         let clone = boxes.parentElement.cloneNode(true);
//         destBoard.appendChild(clone);
//     });
// }

// add listener to save board button
export function saveBoard() {
    let saveBtn = document.getElementById('save_board');
    saveBtn.addEventListener('click', function saveBoard () {
        getDataFromBoard();
    })

}