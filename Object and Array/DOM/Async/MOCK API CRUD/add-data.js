const addData = (e, url) => {
    e.preventDefault();
    const form = e.target;
    let obj = {};
    for (let i = 0; i < form.length - 1; i++) {
        const ele = form[i];
        obj[ele.id] = ele.value;
    }
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((v) => {
            console.log(v);
            getData(url, displayData);
        });
};
