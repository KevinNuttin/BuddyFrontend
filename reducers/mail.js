export default function(mail = null, action) {
    if(action.type == 'addMail') {
        return action.mail;
    } else {
        return mail;
    }
  }

// Sauvegarde du mail dans le Store lors de l'inscription