const Wrapper = document.querySelector('main');

const newParams = new URLSearchParams(window.location.search)

let photosId = newParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/photos?id=${photosId}`)
.then(response => response.json())
.then(data => {
    data.forEach(elem => {
        
            const card = document.createElement("div");
            card.classList.add('card', 'border-0');
            card.innerHTML = `
                <div class="card border-5 h-100 overflow-hidden" style="width:450px; border-top-color: yellow;border-right-color: green;border-left-color: red;border-bottom-color: blue;">
                    <img class="card-img-top" style="width: 100%;height: 450px" src="${elem.url}" alt="">
                    <div class="card-body d-flex flex-column align-items-center">
                        <h4 class="card-title">${elem.title}</h4>
                        <div class="d-flex gap-3">
                            <button class="btn btn-outline-primary">Details</button>
                            <button class="btn btn-outline-success">Update</button>
                            <button class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            `;
            Wrapper.appendChild(card);
    });
})