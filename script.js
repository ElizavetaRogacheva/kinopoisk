const formSearch = document.querySelector('#search-form');

function searchApi(evt) {
    evt.preventDefault();
    console.log('fgfg');
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=a099fd17815f4a790c4f1a6f06a8e34c&language=ru&query=---'
    console.log(requestApi(server));
}

formSearch.addEventListener('submit', searchApi);

function requestApi(url) {
    return url;
};

