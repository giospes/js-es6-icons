const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];


const cardContainer = document.querySelector('.gs-card-container');
printRightCard('animal')
printRightCard('vegetable')
printRightCard('user')

const selectEl = document.getElementById("type")

selectEl.addEventListener("change", function(){
    const selectedValue = selectEl.value;
    cardContainer.innerHTML = ''
    if(selectedValue =='all'){
        printRightCard('animal')
        printRightCard('vegetable')
        printRightCard('user')
    }else{
        printRightCard(selectedValue)
    }
    
})


function rdColor(){
    let hexCode = '#';

    const hexDigits = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hexCode += hexDigits[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}

function printRightCard(type){
    let cardBlocks = [];
    icons.forEach(icon => {
       if(icon.type == type){
            const color = rdColor()
            const card = document.createElement('div')
            card.className = "card bg-info gs-card d-flex flex-column align-items-center py-3"
            card.innerHTML =
            ` 
                <i class=" ${icon.prefix}${icon.family}  ${icon.prefix}${icon.name} fs-2 " style = "color: ${color}"></i>
                <p id="i-name" class="text-uppercase m-0">${icon.name}</p>
            `;
            cardBlocks.push(card.outerHTML);
        } 

    });
    cardContainer.innerHTML += cardBlocks.join('')
}