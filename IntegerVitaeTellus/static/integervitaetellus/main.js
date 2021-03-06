Vue.component('get-recipes',{
    data: function() {
        return {
            recipes: "",
        }
    },
    template: `
        <div>
        <input type="text" placeholder="Search" @keyup.enter="getRecipes" v-model="recipes">
        <button @click="getRecipes" class="search-btn">Search</button>
        </div>
        `,
    methods: {
        getRecipes: function() {
            axios({
                method: 'get',
                url: '/api/v1/',
                params: {
                    search:this.recipes
                }
            }).then(response => {
                this.$emit('result', response.data)
                this.recipes = ""
                })
        }
    }
})


const vm = new Vue ({
    el: '#menu',
    data: {
        title: "",
        image: "",
        recipes: [],
        recipesList: [],
        recipesRandom: [],
    },
    delimiters: ["[[","]]"],
    methods: {
        getRecipes: function() {
            axios({
                method: 'get',
                url: '/api/v1/',
            }).then(response => {
                // this.recipes = response.data
                this.recipesRandom = [response.data[Math.floor(Math.random()*response.data.length)]]
                this.recipesList = response.data
            })
        },
        saveRecipes: function(results) {
            this.recipes=results
        },

    },
    mounted: function() {
        this.getRecipes()
    }
})