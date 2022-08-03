export default function(pseudo = null, action) {
    if(action.type == 'addPseudo') {
        return action.pseudo;
    } else {
        return pseudo;
    }
  }