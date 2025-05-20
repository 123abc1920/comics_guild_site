const parentElement = document.getElementById('start');

fetch('./database.json')
    .then(response => response.json())
    .then(data => data.forEach(item => {
        console.log("Имя:", item.name);
        console.log("Описание:", item.description);
        const block = document.createElement('div');
        block.classList.add('block');

        const name = document.createElement('p');
        name.textContent = item.name;
        block.appendChild(name);

        const name_link = document.createElement('p');
        name_link.textContent = item.name_link;
        block.appendChild(name_link);

        const description = document.createElement('p');
        description.textContent = item.description;
        block.appendChild(description);

        item.links.forEach((it, ind) => {
            if (ind % 2 == 0) {
                const title = document.createElement('p');
                title.textContent = it;
                block.appendChild(title);
            } else {
                const link = document.createElement('p');
                link.textContent = it;
                block.appendChild(link);
            }
        })

        parentElement.appendChild(block);
    }));