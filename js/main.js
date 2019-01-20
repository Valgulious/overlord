var counter = 0;

fetch('characters.json')
    .then(function (response) {
        console.log('json');
        console.log(response.headers.get('Content-Type'));
        console.log(response.status);
        return response.json();
    })
    .then(function (characters) {
        var mainCharacters = document.querySelector('#main-character');

        var imgDIV = document.createElement('div');
        var img = document.createElement('img');

        img.src = characters[counter].img;
        imgDIV.appendChild(img);
        imgDIV.classList.add("img-character");

        var descriptionDIV = document.createElement('div');
        var name = document.createElement('h1');
        var description = document.createElement('p');

        name.innerText = characters[counter].name;
        description.innerText = characters[counter].description;
        descriptionDIV.appendChild(name);
        descriptionDIV.appendChild(description);
        descriptionDIV.classList.add("desc-character");

        mainCharacters.appendChild(imgDIV);
        mainCharacters.appendChild(descriptionDIV);

        var forwardArrow = document.querySelector('#forward');
        forwardArrow.onclick = function () {
            ++counter;
            if (characters.length <= counter) counter = 0;
            console.log(counter);

            img.src = characters[counter].img;
            name.innerText = characters[counter].name;
            description.innerText = characters[counter].description;
        };

        var backArrow = document.querySelector('#back');
        backArrow.onclick = function () {
            --counter;
            if (counter === -1) counter = characters.length - 1;
            console.log(counter);

            img.src = characters[counter].img;
            name.innerText = characters[counter].name;
            description.innerText = characters[counter].description;
        };
    });