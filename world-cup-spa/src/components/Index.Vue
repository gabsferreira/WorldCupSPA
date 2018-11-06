<template>
    <div>
        <b-jumbotron header="World Cup" lead="Bootstrap 4 Components for Vue.js 2" >
        <p>For more information visit website</p>
        </b-jumbotron>
        <p>{{ this.selectedMovies.length }} de 8 filmes selecionados</p> <b-btn @click="$_sendMovies()" variant="primary">More Info</b-btn>
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
    let promise = this.$http.get('https://localhost:44303/api/movie');

    promise.then(res => res.json())
      .then(movies => this.movies = movies, err => console.log(err));
  },

  methods: {
    $_sendMovies() {

      this.$http.post('https://localhost:44303/api/cup', this.selectedMovies )
        .then(function (res) {
            var id = res.headers.get('location');
            console.log(id);
            this.$router.push('/Cup/'+id);
            
            // window.location = res.headers.get('location');
      });
    },

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
</style>
