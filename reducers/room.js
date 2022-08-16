export default function(room = null, action) {
    if(action.type == 'addRoom') {
        return action.room;
    } else {
        return room;
    }
  }

// permet de sauvegarder un ID de room pour afficher le chat correspondant (au click)