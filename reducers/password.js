export default function(password = null, action) {
    if(action.type == 'addMdp') {
        return action.mdp;
    } else {
        return password;
    }
  }

// Sauvegarde du MDP dans le Store lors de l'inscription