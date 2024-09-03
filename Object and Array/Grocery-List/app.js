let groceryList = [];


function onSubmit() {
    let grocery = document.getElementById("grocery");

    if (grocery.value === "") {
        alert("Empty item");
    } else {
        groceryList.push(grocery.value);
        console.log("list", groceryList);
        grocery.value = "";
        displayList();
    }
}

function displayList() {
    let glist = document.getElementById("glist");
    glistHtml = groceryList.map((item, index) => {
        return `<div class="row mb-1">
                <div class="col text-start">${item}</div>
                <a class="col-auto btn btn-close mx-2" href="#" onclick="deleteItem('${index}')"></a>
                </div>`;
    });

    glist.innerHTML = glistHtml;
}

function deleteItem(index) {
    groceryList.splice(index, 1);
    displayList();
}
function clearAll() {
    groceryList.splice(0, groceryList.length);
    displayList();
}