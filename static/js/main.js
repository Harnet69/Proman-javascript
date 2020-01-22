import { dom } from "./dom.js";
import {newBoard, boardDetails, newCard, cloneElement, saveBoard} from "./listeners.js";
// import {getDataFromBoard} from "./data_handlers";

window.onload = function() {
    dragula([document.getElementsByClassName('new_board_td')[0],document.getElementsByClassName('new_board_td')[1],document.getElementsByClassName('new_board_td')[2],document.getElementsByClassName('new_board_td')[3],]);
};



function init() {
    // init data
    // dom.init();
    // // loads the boards to the screen
    // dom.loadBoards();
    newBoard(); // show a new board
    boardDetails(); // add listener to up arrow
    newCard();
    // cloneElement();
    // getDataFromBoard();
    saveBoard();

}

init();
