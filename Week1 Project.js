let notices = [
    { title: "Campus Closed", author: "Principal Yaga", message: "Due to a cursed spirit incident, the east wing is closed." },
    { title: "Lost Glasses", author: "Maki Zenin", message: "If anyone finds a pair of specialized glasses, return them immediately." }
];

let noticeBoard = document.getElementById('board-container');
let postBtn = document.getElementById('post-notice');
let title = document.getElementById('title');
let author = document.getElementById('author');
let msg = document.getElementById('message');
let deleteBtn=document.getElementById('delete-notice');

function renderBoard() {
    
    let noticeCard = notices.map(notice => `<div id="notice"><h1>${notice.title}</h1>
   <p><h2>${notice.author}</h2>
    <h3>${notice.message}</h3>
    </div>`).join('');

    
    noticeBoard.innerHTML = noticeCard;
}

function updateNoticeBoard(){
let newNotices =
        { title: title.value, author: author.value, message: msg.value }

    notices.push(newNotices);
    title.value=""
    author.value=""
    msg.value=""
    renderBoard();
}

function deleteNotice(){
    notices.pop()
    renderBoard()
}

postBtn.addEventListener('click', updateNoticeBoard);
deleteBtn.addEventListener('click',deleteNotice);
renderBoard();

