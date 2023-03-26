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
printAnimals()
printVegetables()
printUsers()

const selectEl = document.getElementById("type")

selectEl.addEventListener("change", function(){
    const selectedValue = selectEl.value;
    cardContainer.innerHTML = ''
    switch(selectedValue){
        case 'Users' :
            printUsers()
            console.log("User")
            break;
        case'Animals':
            printAnimals()
            console.log("Anim")
            break;
        case 'Vegetables':
            printVegetables()
            console.log("Veg")
            break;
        default:
            printAnimals()
            printVegetables()
            printUsers()
            console.log("User")
    
    }


})

function printAnimals(){
    let cardBlocks = [];
    icons.forEach(icon => {
       if(icon.type == 'animal'){
            const color = rdColor()
            const card = document.createElement('div')
            card.className = "card bg-info gs-card d-flex flex-column align-items-center py-3"
            card.innerHTML =
            ` 
                <i class="${icon.prefix}${icon.family}  ${icon.prefix}${icon.name} fs-2 " style = "color: ${color}"></i>
                <p id="i-name" class="text-uppercase m-0">${icon.name}</p>
            `;
            cardBlocks.push(card.outerHTML);
        } 

    });
    cardContainer.innerHTML += cardBlocks.join('')
    
}

function printVegetables(){
    let cardBlocks = [];
    icons.forEach(icon => {
       if(icon.type == 'vegetable'){
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

function printUsers(){
    let cardBlocks = [];
    icons.forEach(icon => {
       if(icon.type == 'user'){
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



function rdColor(){
    let hexCode = '#';

    const hexDigits = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hexCode += hexDigits[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}