const parentElement = document.getElementById('start');

fetch('./database.json')
    .then(response => response.json())
    .then(data => data.forEach(item => {
        const block = document.createElement('div');
        block.classList.add('block');

        const name_info = document.createElement('div');
        name_info.classList.add('row');

        const name = document.createElement('p');
        name.textContent = item.name;
        name.classList.add('col', 'anti-grow-col', "text-decoration-underline", "names", "text-wrap");
        name_info.appendChild(name);

        const name_link = document.createElement('p');
        name_link.textContent = item.name_link;
        name_link.classList.add("col", "fst-italic", "names-links", "text-wrap");

        const copy = document.createElement('i');
        copy.classList.add("bi", "bi-copy");
        name_link.appendChild(copy);

        name_link.onclick = function () {
            navigator.clipboard.writeText(item.name_link);
        };

        name_info.appendChild(name_link);

        block.appendChild(name_info);

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add("descript", "text-wrap");
        block.appendChild(description);

        const links = document.createElement('div');
        var link_row;

        item.links.forEach((it, ind) => {
            if (ind % 2 == 0) {
                const title = document.createElement('p');
                title.textContent = it + ":";
                title.classList.add('col', "anti-grow-col", "link-names", "text-wrap");

                link_row = document.createElement('div');
                link_row.classList.add("row");
                link_row.appendChild(title);
            } else {
                const link = document.createElement('a');
                link.textContent = it;
                link.href = it;
                link.classList.add("col", "names-links", "links", "text-wrap");

                link_row.appendChild(link);
                links.appendChild(link_row);
            }
        })

        block.appendChild(links);

        parentElement.appendChild(block);
    }));