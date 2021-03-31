const initialState = {
    stocks :[
        { key: '1', article: 'Bouteille de lait', quantity: 5 },
        { key: '2', article: 'Pain de mie', quantity: 3 },
        { key: '3', article: 'Mikados', quantity: 10 },
        { key: '4', article: "Huile d'olive", quantity: 3 },
        { key: '5', article: "Papier toilette", quantity: 4 },
        { key: '6', article: "Céréales", quantity: 2 },
        { key: '7', article: "Pack d'eau", quantity: 4 },
        { key: '8', article: "Pack d'eau", quantity: 4 },
        { key: '9', article: "Pack d'eau", quantity: 4 },
        { key: '10', article: "Pack d'eau", quantity: 4 },
        { key: '11', article: "Pack d'eau", quantity: 4 },
        { key: '12', article: "Pack d'eau", quantity: 4 },
        { key: '13', article: "Pack d'eau", quantity: 4 }
    ] 
}

function modifyQuantities (state = initialState, action){
    switch (action.type) {
        case 'QTY_DOWN':
            return Object.assign([], state.map(item => {
                if(item.key === action.key){
                  item.quantity -= 1;
                }
                return item;
            }));   
        default:
            return state
    }    
}