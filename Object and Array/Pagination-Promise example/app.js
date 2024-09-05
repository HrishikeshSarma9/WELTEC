let pageSize = 100;
let data = [];
let currentPage;
let totalPage; //-------------

fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        return response.json();
    })
    .then((v) => {
        data = v;
        page(1);
        currentPage = 1;
        totalPage = Math.ceil(data.length / pageSize);
        displayButtons(totalPage);
    });

// Display Pagination buttons
function displayButtons(totalPage) {
    let d = "";

    for (let i = 1; i <= totalPage; i++) {
        d =
            d +
            `<li class="page-item"><a class="page-link ${currentPage == i ? "active" : ""
            }" href="#" onclick="page(${i})">${i}</a></li>`;
    }

    d =
        `<li class="page-item"><a class="page-link" href="#" onclick="pre()">Previous</a></li>` +
        d +
        `<li class="page-item"><a class="page-link" href="#" onclick="next()">Next</a></li>`;

    document.getElementById("pageBtn").innerHTML = d;
}

// Display Data on the page
function page(pageNum) {
    currentPage = pageNum;
    displayButtons(totalPage); //-------------

    let start = (pageNum - 1) * pageSize;
    let end = start + pageSize;

    let arr = data.slice(start, end);
    let arrHtml = arr.map((x) => {
        
        return `<tr>
                    <td>${x.id}</td>
                    <td>${x.name}</td>
                    <td>${x.email}</td>
                    <td>${x.body}</td>
                </tr>`;
    });

    document.getElementById("data").innerHTML = arrHtml.join(" ");
}

// set page size from input
function setPageSize() {
    let x = Number(document.getElementById("pageSize").value);

    if (x > data.length) {
        return alert("Maximum of " + data.length + " records only");
    } else {
        pageSize = x;
    }
    
    page(currentPage); //-------------
    totalPage = Math.ceil(data.length / pageSize);
    displayButtons(totalPage);
}

// Previous button
function pre() {
    currentPage -= 1;

    if (currentPage == 0) {
        return alert("First Page");
    }
    page(currentPage);
    displayButtons(totalPage); //-------------
}

// Next button
function next() {
    currentPage += 1;

    if (currentPage > totalPage) {
        return alert("Last Page");
    }
    page(currentPage);
    displayButtons(totalPage); //-------------
}
