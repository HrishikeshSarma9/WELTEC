const editData = (url, id) => {
    console.log(id);

    getData(url, formEdit, id);
};

const formEdit = (url, data) => {
    let html = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Please edit any values you want to update</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form name="update-form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" value="${data.name}" class="form-control" id="name" name="name">
                        </div>
                        <div class="mb-3">
                            <label for="city" class="form-label">City</label>
                            <input type="text" value="${data.city}" class="form-control" id="city" name="city" >
                        </div>
                        <div class="mb-3">
                            <label for="department" class="form-label">Department</label>
                            <input type="text" value="${data.department}" class="form-control" id="department" name="department" >
                        </div>
                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="handleUpdate('${url}','${data.id}')">Save changes</button>
                </div>
                </div>
            </div>
        </div>`;

    // Add modal to DOM
    let popup = document.getElementById("popup");
    popup.innerHTML = html;

    // call the modal to show
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
};

const handleUpdate = (url, id) => {
    
    let form = document.forms["update-form"];
    let obj = {};

    for (let i = 0; i < form.length; i++) {
        const ele = form[i];
        obj[ele.id] = ele.value;
    }

    fetch(url + "/" + id, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((v) => {
            // console.log(v);
            getData(url, displayData);
        });
};
