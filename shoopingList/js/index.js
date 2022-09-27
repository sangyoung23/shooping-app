const items = document.querySelector(".items");
// const form = document.querySelector(".form");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");


function onAdd () {
    // 1. 사용자가 입력한 텍스트를 받아옴
    let text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item); 
    // 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block:'center'}); 
    // 5. input을 초기화 한다.
    input.value = '';
    input.focus();
};

function createItem (text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'iitem_row');

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item');

    const itemSpan = document.createElement('span');
    itemSpan.setAttribute('class', 'item_name');
    itemSpan.innerText = text;

    const itemButton = document.createElement('button')
    itemButton.setAttribute('class', 'item_delete');
    itemButton.innerHTML = `- 빼기`;
    itemButton.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    itemDivider.appendChild(itemSpan);
    itemDivider.appendChild(itemButton);

    itemRow.appendChild(itemDivider);
    return itemRow;    
}

// input과 button에 각각 이벤트를 주지 않고도 form 을 이용해서 똑같은 이벤트를 처리할 수 있다.
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     onAdd();
// })

input.addEventListener('keyup', (e) => {
    // keydown을 사용하게 되면 한글로 입력시 두번씩 입력이 되는 경우가 있다
    // 그 경우 isComposing 사용
    // if (event.isComposing) {
    //     return;
    // }
    
    if(e.key === 'Enter') {
        onAdd();
    }
})
addBtn.addEventListener('click', onAdd);


