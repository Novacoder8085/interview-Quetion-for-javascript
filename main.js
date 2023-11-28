function* click() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

let generateNUm = click();
let arr = [];
let randomId;
randomId = generateNUm.next().value;
function eventvalue() {
    let result = document.getElementById('Enter-input');
    arr.push(result.value);
    console.log(arr);
    randomId = generateNUm.next().value;
    newId = randomId;

    let newItem = document.createElement('textarea');
    newItem.setAttribute('id', randomId);
    newItem.style.width = "400px";
    newItem.style.height = "50px";
    newItem.style.color = "#000";
    newItem.style.background = "pink";
    newItem.style.position = "relative";
    newItem.style.top = "10px";
    newItem.style.margin = "auto";
    newItem.innerHTML = result.value;
    result.value = '';
    document.querySelector('.item-list').appendChild(newItem);

    let deleteItem = document.createElement('button');
    deleteItem.setAttribute('id', randomId);
    deleteItem.style.width = "120px";
    deleteItem.style.height = "50px";
    deleteItem.style.background = " green";
    deleteItem.style.color = "aliceblue";
    deleteItem.style.position = "relative";
    deleteItem.style.top = "-11px";
    deleteItem.style.left = "10px";
    deleteItem.innerHTML = "DELETE";
    document.querySelector('.item-list').appendChild(deleteItem);

    deleteItem.addEventListener('click', (e) => {
        console.log("this is the evenetid ::", e.target.id)
        let index = e.target.id;
        let clearItem1 = document.getElementById(randomId);
        // arr.indexof(clearItem1);
        // arr.indexof(clearItem2);
        // if (index && index === newItem.id && deleteItem.id) {
        //     document.querySelector('.item-list').removeChild(clearItem1);
        //     document.querySelector('.item-list').removeChild(clearItem2);
        // }

    });
}

