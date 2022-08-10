export default function (socket = 'null', action) {
    if (action.type == 'saveSocket') {
      return action.socket;
    } else {
      return socket;
    }
  }