const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = document.querySelector('input');
    const random_image = document.querySelector('.random_image');
    const API_KEY = 'Lt2X6zPeKFNuqgDGhbDIwI9jQ9MRHjPokpI5QMjif4M'

    let res = fetch(`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=${inp.value}`)

    res

        .then(response => {
            response.json()
                .then(result => {
                    random_image.scr = result.urls.regular;
                    console.log(result)

                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))






})

