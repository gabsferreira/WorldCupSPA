<template>
    <div>
      <b-jumbotron header="Copa do mundo de filmes" lead="Selecione 8 times para começar a competição!" >
          </b-jumbotron>
      <b-row class="mb-3">
          <b-col class="col-6 text-left">
            <p>{{ this.selectedMovies.length }} de 8 filmes selecionados</p> 
          </b-col>
          <b-col class="col-6 text-right">
            <b-btn class="btn btn-danger btn-lg" :class="{ disabled: isDisabled }" @click="$_sendMovies()" variant="primary">Rodar copa!</b-btn>
          </b-col>
      </b-row>
      <b-row>
        <div class="movie-columns col">
            <div v-for="(movie, key) in movies">
                <b-card-body>
                <b-card style="height: 130px; cursor: pointer;" v-bind:class="{'selected': $_isSelected(movie)}" :key="key" @click="$_toggleItem(movie)">
                <p>{{ movie.titulo }}</p>
                <p>{{ movie.ano }}</p>
                </b-card>
                </b-card-body>
            </div>
        </div>
      </b-row>
      <br/>
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

  computed: {
    isDisabled () {
        return this.selectedMovies.length != 8;
    }
  },

  created() {
    let promise = this.$http.get('https://worldcupapi-gabs.azurewebsites.net/api/movie');

    promise.then(res => res.json())
      .then(movies => this.movies = movies, err => console.log(err));
  },

  methods: {
    $_sendMovies() {

      this.$http.post('https://worldcupapi-gabs.azurewebsites.net/api/cup', this.selectedMovies )
        .then(function (res) {
            var id = res.headers.get('location');
            this.$router.push('/Cup/'+id);
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
  background-color: rgba(151, 255, 255, 0.9);
}

.movie-columns {
  column-count: 4;
}
</style>
