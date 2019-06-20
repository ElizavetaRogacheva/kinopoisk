const formSearch = document.querySelector('#search-form');
const movie = document.querySelector('#movies');

function searchApi(evt) {
    evt.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=a099fd17815f4a790c4f1a6f06a8e34c&language=ru&query=' + 
    searchText;
    requestApi('GET', server)
        .then(function(result){
            const output = JSON.parse(result);
            let inner = '';
            output.results.forEach(function(item, i){
                let nameItem = item.name || item.title;
                let dateItem = item.first_air_date || item.release_date;
                inner = inner + '<div class = "col-3">' + nameItem + ' Дата выхода: ' + dateItem + '</div>';
        });
        movie.innerHTML = inner;
        })
        .catch(function(reason) {
            movie.innerHTML = 'Oops! Something wrong...';
            console.log('error' + reason.status);
        })
        ;
};
    

formSearch.addEventListener('submit', searchApi);

function requestApi(method,url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open(method, url);
        request.addEventListener('load', function () {
            if (request.status !== 200) {
                reject({
                    status: request.status
                });
                return;  
            }

            resolve(request.response);
        });
        request.addEventListener('error', function () {
            reject({
                status: request.status
            });
        });
        request.send();
    });
};
    
 //   request.addEventListener('readystatechange', function () {
 //       if (request.readyState !== 4) return;
 //       movie.innerHTML = 'Downloading...';
 //       if (request.status !== 200) {
 //           movie.innerHTML = 'Oops! Something wrong...';
 //           return;
 //       }
 //   })
 //};
