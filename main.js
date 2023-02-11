
let addClickBtn = document.querySelector(".addBtn");
addClickBtn.addEventListener("click", () => {
    let newLi = document.createElement("li");
    let newLiAtt = document.createAttribute("class");
    newLiAtt.value="detailedItem";
    newLi.setAttributeNode(newLiAtt);
    
    // 클래스 속성값 추가
    let delClass = document.createAttribute("class");
    delClass.value = "del";
    let completeClass = document.createAttribute("class");
    completeClass.value ="complete";

    // li 목록에 들어갈 글 태그와 완료 및 삭제 버튼 생성
    let newSpan= document.createElement("span");
    let complitionBtn = document.createElement("button");
    let clearBtn = document.createElement("button");

    // 완료 및 삭제 버튼에 클래스 속성값 적용
    clearBtn.setAttributeNode(delClass);
    complitionBtn.setAttributeNode(completeClass);

    // 입력창에서 입력값 받아오기
    let addedText = document.querySelector("#text");
    let newText = document.createTextNode(addedText.value);

    // 완료 및 삭제라는 텍스트 노드 생성
    let complition = document.createTextNode("완료");
    let clear = document.createTextNode("삭제");
    
    //li의 자식을 span 으로, 그리고 span의 자식을 입력받은 텍스트 노드로 설정
    newLi.appendChild(newSpan).appendChild(newText);
    /* li의 자식을 완료버튼으로, 그리고 완료버튼의 자식으로 "완료" 라는 텍스트 노드로 설정 */
    newLi.appendChild(complitionBtn).appendChild(complition);
    /* li의 자식을 삭제버튼으로, 그리고 삭제버튼의 자식으로 "삭제" 라는 텍스트 노드로 설정 */
    newLi.appendChild(clearBtn).appendChild(clear);

    document.querySelector(".list_item").appendChild(newLi);

    addedText.value = "";
})

let deletBtn = document.querySelector(".del");
deletBtn.addEventListener("click", () => {
   console.log("print");
})