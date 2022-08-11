export default function(id = '', action) {
    if(action.type == 'addMatch') {
        return action.id;
    } else {
        return id;
    }
  }