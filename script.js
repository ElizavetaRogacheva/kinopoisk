const formSearch = document.querySelector('#search-form');

function searchApi(evt) {
    evt.preventDefault();
    console.log('fgfg');
    const searchText = document.querySelector('.form-control').value,
    server = 'https://www.themoviedb.org/'
    console.log(requestApi(server));
}

formSearch.addEventListener('submit', searchApi);

function requestApi(url) {
    return url;
};

