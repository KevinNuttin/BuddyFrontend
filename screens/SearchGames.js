export default function searchGames(props) {

    //** requett au Backend en post pour chercher un jeu à partir de l'input  */
     // TODO: ajouter un useEffect qui appel la fonction lorsqu'il y a un changement de l'input 
    // TODO: ajouter dynamiquement le résultat de l'input au body de la request

    await fetch('http://localhost:3000/library/games', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'gameName=Tomb'
    });

    //** récupérer la liste des jeux de la recherche depuis le back pour affichage sous forme de liste dans le front */
    var rawResponse = await fetch('http://localhost:3000/library/games');
    var response = await rawResponse.json();
    console.log(response); 

    return ("coucou")}