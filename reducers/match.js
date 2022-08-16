export default function(id = '', action) {
    if(action.type == 'addMatch') {
        return action.id;
    } else {
        return id;
    }
  }

// Récupération de l'ID pour l'afficher la PP du user qui match dans la MatchScreen