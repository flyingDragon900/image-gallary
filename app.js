// Variables
const navbar = document.querySelector('#nav')
const brand = document.querySelector('#brand')
const col1 = document.querySelector('#col-1')
const col2 = document.querySelector('#col-2')
const col3 = document.querySelector('#col-3')

// APIs
let API_KEY = "e1lZ9c8Ib2LAdqQxxgAe3ok1iZf9a52jZF6LgipEdUE"
let API_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=30&page=1`

imageURL = []
window.onload = (event) => {
    fetchData()
}
const fetchData = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    console.log(data);

    let imageArrys = data

    imageArrys.forEach(element => {
        imageURL.push(element.urls.regular)
    });

    displayImages()
}

function displayImages() {
    if (imageURL.length == 0) {
        const error = document.querySelector('#err')
        error.innerHTML = '<h3>Could not found Image</h3>'
        return
    }

    col1.innerHTML = ""
    col2.innerHTML = ""
    col3.innerHTML = ""

    imageURL.forEach((url, index) => {
        var image = document.createElement('img')
        image.src = url
        image.className = "mt-3"
        image.setAttribute("width", "100%")

        if ((index + 1) % 3 == 0) {
            col1.appendChild(image)
        }
        if ((index + 2) % 3 == 0) {
            col2.appendChild(image)
        }
        if ((index + 3) % 3 == 0) {
            col3.appendChild(image)
        }
    })
}
