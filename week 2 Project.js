
let noticeBoard = document.getElementById('board-container');
let postBtn = document.getElementById('post-notice');
let title = document.getElementById('title');
let author = document.getElementById('author');
let msg = document.getElementById('message');
let deleteBtn=document.getElementById('delete-notice');


let textData=localStorage.getItem('arrayNotices');
let notices;
if(textData!==null){
notices=JSON.parse(textData)
}
else{
    notices=[]
}


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
    let stringArray=JSON.stringify(notices);
    localStorage.setItem("arrayNotices",stringArray)
    title.value=""
    author.value=""
    msg.value=""
    renderBoard();
}

function deleteNotice(){
    notices.pop()
    let stringArray = JSON.stringify(notices);
    localStorage.setItem("arrayNotices", stringArray);
    renderBoard()
}


postBtn.addEventListener('click', updateNoticeBoard);
deleteBtn.addEventListener('click',deleteNotice);
renderBoard();

