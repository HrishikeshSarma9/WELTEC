const getData = (url, func, id = "") => {

  // ID for instancesto get a single data
  fetch(url + "/" + id)
    .then((res) => res.json())
    .then((y) => func(url, y));
}

const displayData = (url, data) => {

  let html = data.map((item, index) => {
    return `  <tr >
                    <th scope="row">${item.id}</th>
                    <td>${item.name}</td>
                    <td >${item.city}</td>        
                    <td >${item.department}</td>        
                    <td > <a href="#" onclick="deleteData('${url}','${item.id}')" class="btn text-danger"><i class="ri-delete-bin-7-fill"></i></a></td>        
                    <td > 
                        <a href="#" onclick="editData('${url}','${item.id}')" class="btn text-dark-emphasis">
                            <i class="ri-edit-2-fill"></i>
                        </a>
                    </td>        
                </tr>`;
  });

  document.getElementById("display").innerHTML = html.join("");
};
