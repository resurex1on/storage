function maker(json){
    console.log(json)
    json.forEach(element => {
        let card = `<a class="localpagelist2__block" href="#"><span class="localpic localpagelist2__block-pic localpic--small"><img src="${element.image}" alt="" title="" /></span><span class="localpagelist2__block-text">${element.name}</span></a>`
        document.querySelector('.localpagelist2').innerHTML += card;
        console.log(card)
    });
}

fetch('https://raw.githubusercontent.com/lo7656/storage/master/data.json', { method: 'GET' })
    .then(response => response.json())
    .then(body => maker(body.location.pathname))
    .catch(error => console.log(error))