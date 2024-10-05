const getData = (url, func) => {
    fetch(url)
      .then((res) => res.json())
      .then((y) => func(url,y));
  };
  const displayData = (url,data) => {
    let html = data.map((item, index) => {
      return `  <tr >
                    <th scope="row">${item.id}</th>
                    <th>${item.name}</th>
                    <th >${item.city}</th>        
                    <th >${item.department}</th>        
                    <th > <a href="#" onclick="deleteData('${url}','${item.id}')" class="btn btn-danger"><i class="ri-delete-bin-7-fill"></i></a></th>        
                    <th > 
                        <a href="#" onclick="editData('${url}/${item.id}')" class="btn btn-danger">
                            <i class="ri-pencil-fill"></i>
                        </a>
                    </th>        
                </tr>`;
    });
    document.getElementById("display").innerHTML = html.join("");
  };

