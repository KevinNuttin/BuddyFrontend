export default function(password = null, action) {
    if(action.type == 'addMdp') {
        return action.mdp;
    } else {
        return password;
    }
  }