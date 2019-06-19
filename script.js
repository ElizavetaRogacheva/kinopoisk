const formSearch = document.querySelector('#search-form');
const movie = document.querySelector('#movies');

function searchApi(evt) {
    evt.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=a099fd17815f4a790c4f1a6f06a8e34c&language=ru&query=' + 
    searchText;
   requestApi('GET', server);
}

formSearch.addEventListener('submit', searchApi);

function requestApi(method,url) {

    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();

    request.addEventListener('readystatechange', function () {
        if (request.readyState !== 4) return;

        if (request.status !== 200) {
            console.log('error' + request.status);
            return;
        }

        const output = JSON.parse(request.responseText);

        let inner = '';

        output.results.forEach(function(item, i){
            let nameItem = item.name || item.title;
            let dateItem = item.first_air_date || item.release_date
            inner = inner + '<div class = "col-3">' + nameItem + ' Дата выхода: ' + dateItem + '</div>';
        });
    
        movie.innerHTML = inner;
        console.log(output);
    })
};

