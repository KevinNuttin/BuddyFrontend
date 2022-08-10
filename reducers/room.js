export default function(room = null, action) {
    if(action.type == 'addRoom') {
        return action.room;
    } else {
        return room;
    }
  }