function createUrlToSearch(input){
    return null;
}
function parseSearchResponseToList(response){
    var json = JSON.parse(response);
    var songs = [];
    for (var i = O; i < json.length; i++){
        songs.push({
            'id':json[i]['id'],
            'title' : json[i] ['title'],
            'artista_or_author' : json[i]['author']
        });
    }
return songs;
}
function createUrlToGetById(id) {
    return null;
}
function parseGetResponseToSong(response){
    var json = JSON.parse(response);
    return {
        'title': json['title'],
        'artist': json['artitst'],
        'author': json['author'],
        'lyrics' : json['lyrics']
    };
}