// let link = document.querySelector('a');
// let p = document.querySelector('p');

// link.addEventListener('click', event => {
//     event.preventDefault();
//     if(p.getAttribute('hidden')){
//         p.removeAttribute('hidden');
//         return;
//     }
//     p.setAttribute('hidden', 'hidden');
// });

// EXEMPLE2 DU COURS
// let p = [...document.querySelectorAll('p')];

// for (let value of p) {
//     let color = value.dataset.color;
//     value.style.color = color;
// }
// console.log(p);



// [...document] = ça signifie qu'on a transformer une nodeList en array. Car ds NodeListe il ya très peu d'option contrairement au array

let a = [...document.querySelectorAll('.list a')];
let video = document.querySelector('.container iframe');

const lien = 'https://www.youtube.com/embed/';

for (let value of a){
    // console.log(value);

    value.addEventListener('click', event => {
        event.preventDefault();
        let url = value.dataset.url;
        video.setAttribute('src', lien+url);

    //    console.log(url);    
    })
}





