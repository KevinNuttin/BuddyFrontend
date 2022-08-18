export default function(token = '', action){
    if(action.type === 'addToken'){
        return action.token
    } else {
        return token
    }
}

// A la fois dans le Store et le local storage
// Utilisé en premier dans la store, puis dans le local storage pour le stocker de manière plus persistante 
// pour le rafraichissement des pages et la sécurité