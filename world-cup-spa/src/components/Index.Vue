<template>
    <div>
        <b-jumbotron header="World Cup" lead="Bootstrap 4 Components for Vue.js 2" >
        <p>For more information visit website</p>
        </b-jumbotron>
        <p>{{ this.selectedMovies.length }} de 8 filmes selecionados</p> <b-btn variant="primary" href="#">More Info</b-btn>
        <b-card-group columns>
            <div v-for="(movie, key) in movies">
            <transition name="movie-fade">
                <b-card v-bind:class="{'selected': $_isSelected(movie)}" :key="key" @click="$_toggleItem(movie)">
                <p>{{ movie.titulo }}</p>
                <p>{{ movie.ano }}</p>
                </b-card>
            </transition>
            </div>
        </b-card-group>
    </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      movies: [],
      selectedMovies: []
    }
  },

  created() {
    let promise = this.$http.get('https://worldcupapi-gabs.azurewebsites.net/api/movie');

    promise.then(res => res.json())
      .then(movies => this.movies = movies, err => console.log(err));
  },

  methods: {
    $_toggleItem(movie) {
      
      if(this.selectedMovies.includes(movie))
      {
        const index = this.selectedMovies.indexOf(movie);
        this.selectedMovies.splice(index, 1);
      }
      else
      {
        if(this.selectedMovies.length != 8)
        {
          this.selectedMovies.push(movie);
        }
      }      
    },
    $_isSelected(movie) {
      return this.selectedMovies.includes(movie);
    }
  }
}
</script>

<style>

.selected {
  background-color: rgba( 0, 0, 0, .5);
}

.movie-fade-enter, movie-fade-leave-active {
  opacity: 0;
}

.movie-fade-enter-active, movie-fade-leave-active {
  transition: opacity .4s;
}


</style>
