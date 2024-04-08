const Wrapper = document.querySelector('main');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
                const card = document.createElement("div");
                card.classList.add('card');
                card.innerHTML = `
                    <div class="card border-5 h-100 overflow-hidden" style="width:450px; border-top-color: yellow;border-right-color: green;border-left-color: red;border-bottom-color: blue;" id="demo">
                        <img class="card-img-top" style="width: 100%;height: 450px" src="${element.url}" alt="">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h4 class="card-title">${element.title}</h4>
                            <div class="d-flex gap-3 align-items-center">
                                <button class="btn btn-outline-primary" onclick="show(${element.id})">Details</button>
                                <button class="btn btn-outline-success">Update</button>
                                <button class="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
                Wrapper.appendChild(card);
        });
    })

function show(parametric) {
    window.location.href = `http://127.0.0.1:5500/detail.html?id=${parametric}`;
}
