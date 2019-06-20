const formSearch = document.querySelector('#search-form');
const movie = document.querySelector('#movies');
const imageUrl = 'https://image.tmdb.org/t/p/w500';

function searchApi(evt) {
    evt.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=a099fd17815f4a790c4f1a6f06a8e34c&language=ru&query=' + 
    searchText;
    movie.innerHTML = 'Downloading...';

    fetch(server)
        .then(function(value){
            return value.json();
        })
        .then(function(output){
            let inner = '';
            output.results.forEach(function(item, i){
                let nameItem = item.name || item.title;
                let dateItem = item.first_air_date || item.release_date;
                inner = inner + `
                <div class = "col-12 col-md-4 col-xl-3">
                    <img src='${imageUrl + item.poster_path}' alt='${nameItem}'>
                        ${nameItem}
                        ' Дата выхода: '
                        ${dateItem}
                </div>
                `
                
                '<div class = "col-3">' + nameItem + ' Дата выхода: ' + dateItem + '</div>';
        });
        movie.innerHTML = inner;
        })
        .catch(function(reason){
            movie.innerHTML = 'Oops! Something wrong...';
            console.log('error' + reason.status);
        });
};
    

formSearch.addEventListener('submit', searchApi);

