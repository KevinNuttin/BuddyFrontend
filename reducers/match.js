export default function(pseudo = null, action) {
    if(action.type == 'addMatch') {
        return action.pseudo;
    } else {
        return pseudo;
    }
  }