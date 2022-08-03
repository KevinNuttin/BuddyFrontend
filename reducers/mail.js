export default function(mail = null, action) {
    if(action.type == 'addMail') {
        return action.mail;
    } else {
        return mail;
    }
  }