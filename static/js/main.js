import { dom } from "./dom.js";
import {newBoard, boardDetails, newCard} from "./listeners.js";

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

}

init();
