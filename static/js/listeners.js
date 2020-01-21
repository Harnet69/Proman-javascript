export function boardDetails() {
    let showBoarder_Details_btn = document.getElementById('show_boarder_details');
    let boardDetails = document.getElementById('board_details');
    let classForHide = 'elem_hide';

    showBoarder_Details_btn.addEventListener('click', function () {
        console.log(boardDetails);
        boardDetails.classList.toggle(classForHide);
    })
}