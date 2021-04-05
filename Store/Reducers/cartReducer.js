const initialState = {cart : [
    { id: "1", nom_produit: "Barre de Chocolat" }, 
    { id: "2", nom_produit: "Paquet de Lait" }, 
    { id: "3", nom_produit: "Shamppoing anti-pelliculaire" },
    { id: "4", nom_produit: "Sèche-Cheveux" },
    /*
    { id: "5", nom_produit: "Coca-cola" },
    { id: "6", nom_produit: "Jus de pomme" },
    { id: "7", nom_produit: "Biscuits" },
    { id: "8" , nom_produit: "Produit Linge" },
    { id: "9", nom_produit: "Orange" },
    { id: "10" , nom_produit: "Pain" },
    { id: "11", nom_produit: "Salade" }
    */
  ]
}


function cart(state = initialState, action){
    let nextState
    switch (action.type)  {
        case 'ADD_TO_CART':
            nextState = { ...state,
            cart: [...state.cart, action.value]
            }
            return nextState || state

        case 'DELETE_FROM_CART':
            let id = action.value.id - 1
            let cartCopy = state.cart

            nextState = {
                ...state,
                cart: [
                    ...state.cart.slice(0, id),
                    ...state.cart.slice(id + 1),
                ].map((item, index) => ({...item, id: (index + 1).toString()}))
            }

            /*
            nextState = {...state,
            cart: state.cart.filter(item => item.id !== action.value.id)
            }
            

            if (id >= 0 && id <= cartCopy.length) {
                for(let i = id -1; i < cartCopy.length; i++ ){
                    //Convert id to int since its a string, then convert the result to string again
                    let newId = (parseInt(cartCopy[i]['id'] - 1).toString())
                    nextState = {
                        ...state,
                        cart: {
                            ...state.cart,
                            id: newId
                        }
                    }
                    //cartCopy[i]['id'] = newId

                }  
            }      
            */
        
            
            return nextState

        default: 
            return state
    }

}

export default cart