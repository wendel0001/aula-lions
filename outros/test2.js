// 1. Gera a URL para buscar a lista de músicas
function createUrlToSearch(input){
    return `https://api.vagalume.com.br/search.artmus?q=${encodeURIComponent(input)}&limit=10`;
}

// 2. Transforma o JSON do Vagalume na sua lista de objetos
function parseSearchResponseToList(response){
    var json = JSON.parse(response);
    var songs = [];
    // O Vagalume retorna os resultados dentro de 'docs'
    var docs = json.response.docs; 
    
    for (var i = 0; i < docs.length; i++){
        songs.push({
            'id': docs[i]['id'],
            'title': docs[i]['title'],
            'artist_or_author': docs[i]['band'] // No Vagalume é 'band'
        });
    }
    return songs;
}

// 3. Gera a URL para pegar a letra completa
function createUrlToGetById(id) {
    return `https://api.vagalume.com.br/search.php?musid=${id}`;
}

// 4. Extrai a letra para exibir no Datashow
function parseGetResponseToSong(response){
    var json = JSON.parse(response);
    var musica = json.mus[0]; // Pega a primeira música do array
    
    return {
        'title': musica['name'],
        'artist': json['art']['name'],
        'lyrics': musica['text'] // Aqui está o texto puro para o Datashow
    };
}