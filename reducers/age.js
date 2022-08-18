export default function(age = null, action) {
    if(action.type == 'addAge') {
        return action.age;
    } else {
        return age;
    }
  }

// Sauvegarde de l'age dans le Store lors de l'inscription