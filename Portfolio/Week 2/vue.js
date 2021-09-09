var app = new Vue({
    el: '#app',
    data: {
        nToDo: '',
        todos: []
    },
    methods: {
        newToDo() {
            this.todos.push({
                title: this.nToDo,
                done: false
            })
        }
    }
})