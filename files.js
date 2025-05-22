const parentElement = document.getElementById('start');

fetch('./database.json')
    .then(response => response.json())
    .then(data => data.forEach(item => {
        const container = document.createElement('div');
        container.classList.add('col-12', 'col-lg-6', 'contain');

        const block = document.createElement('div');
        block.classList.add('row', 'block');

        const photo_container = document.createElement('div');
        photo_container.classList.add('col', 'photo-container', "text-wrap");

        const info_container = document.createElement('div');
        info_container.classList.add('col', 'info-container', "text-wrap");

        const name = document.createElement('p');
        name.textContent = item.name;
        name.classList.add("names");
        info_container.appendChild(name);

        const name_link = document.createElement('p');
        name_link.textContent = item.name_link;
        name_link.classList.add("fst-italic", "names-links", "text-break");

        const copy = document.createElement('i');
        copy.classList.add("bi", "bi-copy");
        name_link.appendChild(copy);

        name_link.onclick = function () {
            navigator.clipboard.writeText(item.name_link);
        };

        info_container.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add("descript", "text-wrap");
        info_container.appendChild(description);

        const links = document.createElement('div');
        links.classList.add('links-list');
        var link_row;

        item.links.forEach((it, ind) => {
            if (ind % 2 == 0) {
                const title = document.createElement('p');
                title.textContent = it + ":";
                title.classList.add('col', "anti-grow-col", "link-names");

                link_row = document.createElement('div');
                link_row.classList.add("row", "links-row");
                link_row.appendChild(title);
            } else {
                const link = document.createElement('a');
                link.textContent = it;
                link.href = it;
                link.classList.add("col", "anti-grow-col", "names-links", "links");

                link_row.appendChild(link);
                links.appendChild(link_row);
            }
        })

        info_container.appendChild(links);

        const img = document.createElement('img');
        img.classList.add("img-fluid");
        img.src = "./placeholder.svg";

        photo_container.appendChild(img);
        photo_container.appendChild(name_link);

        block.appendChild(photo_container);
        block.appendChild(info_container);

        container.appendChild(block);

        parentElement.appendChild(container);
    }));