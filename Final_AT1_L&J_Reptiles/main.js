var app = new Vue({
    el: '#app',
    data: {
    listings: [
        { species: 'Gecko', seller: 'L & J Reptiles', age: "2 Years Old", gender: 'Male', img: 'assets/gecko2.jpg'},
        { species: 'Lizard', seller: 'L & J Reptiles', age: "6 Months Old", gender: 'Female', img: 'assets/lizard.jpg'},
        { species: 'Snake', seller: 'L & J Reptiles', age: '3 Months Old', gender: 'Female', img: 'assets/snake.jpg'},
        { species: 'Turtle', seller: 'L & J Reptiles', age: '4 Years Old', gender: 'Male', img: 'assets/turtle.jpg'},
        { species: 'Crocodile', seller: 'L & J Reptiles', age: '9 Years Old', gender: 'Male', img: 'assets/crocodile.jpg'},
        ],
    search: '',    
    },
    computed: {
        filteredListings() {
            return this.listings.filter(listing => listing.species.toLowerCase().includes(this.search.toLowerCase()));
        },

    },
})