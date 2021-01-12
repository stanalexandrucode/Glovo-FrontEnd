let cards = document.querySelector(".cards");
let newsEndpoint = 'https://api.hnpwa.com/v0/news/1.json';



async function getNews(endpoint) {

    let data = await fetch(`${endpoint}`)
    let jsonData = await data.json()


    for (let i = 0; i < 10; i++) {

        let cardDeck = document.createElement('div');
        cardDeck.setAttribute('class', 'card-deck')
        cards.appendChild(cardDeck);

        for (let j = 0; j < 3; j++) {

            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            //
            // let img = document.createElement('img')
            // img.setAttribute('src', 'https://image.shutterstock.com/image-photo/silhouette-man-sitting-relaxing-under-600w-519411058.jpg');
            // img.setAttribute('class', "card-img-top");
            // img.setAttribute('alt', '#text pt alt')
            // card.appendChild(img);

            let cardBody = document.createElement('div')
            cardBody.setAttribute('class', 'card-body')

            let cardTitle = document.createElement('h5');
            cardTitle.setAttribute('class', 'card-title');
            cardTitle.innerHTML = `User: ${jsonData[j].user}`;
            cardBody.appendChild(cardTitle);

            let cardText = document.createElement('p');
            cardText.setAttribute('class', 'card-text');
            cardText.innerHTML = `<a href="#">${jsonData[j].title}</a>`;
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);

            let cardFooter = document.createElement('div');
            cardFooter.setAttribute('class', 'card-footer');

            let small = document.createElement('small');
            small.setAttribute('class', 'text-muted')
            small.innerText = `${jsonData[j].time_ago}`;
            cardFooter.appendChild(small);
            card.appendChild(cardFooter);
            cardDeck.appendChild(card);
            cards.appendChild(cardDeck);
        }
    }
}

getNews(newsEndpoint)

