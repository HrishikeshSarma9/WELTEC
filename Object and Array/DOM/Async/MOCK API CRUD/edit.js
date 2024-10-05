const editData = (url) => {
    getData(url,formEdit)
    // fetch(url)
    //     .then(res => res.json())
    //     .then(y => {
    //         formEdit(y)

    //     })
}

const formEdit = (url,data) => {
    console.log(data);
    
    let html =
        `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${data.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${data.city}
                    ${data.department}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>`

    let popup = document.getElementById("popup")
    popup.innerHTML = html

    const modal = new bootstrap.Modal(document.getElementById("exampleModal"))
    modal.show()
}