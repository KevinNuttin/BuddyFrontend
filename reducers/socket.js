export default function (socket = 'null', action) {
    if (action.type == 'saveSocket') {
      return action.socket;
    } else {
      return socket;
    }
  }

// Création du websocket à l'ouverture de l'application, stocké dans le Store pour être utilisé dans la messagerie