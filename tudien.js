
let enWordsArr = ["banana","book","apple"];
let vnWordsArr = ["chuối","sách","táo"];
function searchword() {
    let pTag =document.getElementById("result");
    let keyword = document.getElementById("keyword").value;
    let Value = null ;

    for (let i=0; i<enWordsArr.length;i++) {
    if (enWordsArr[i] === keyword ){
        Value = vnWordsArr[i];
        break;
    }else {
        Value ="khong tim thay";
    }
}
   pTag.innerHTML = Value;
}
