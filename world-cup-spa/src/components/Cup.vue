<template>
    <div>
        <b-jumbotron header="Copa do mundo de filmes" lead="Aqui estão os vencedores!" >
          </b-jumbotron>
        <b-col>
            <div class="input-group-lg input-group">
                <span class="input-group-text">1º </span>
            <div class="input-group-prepend">
            </div>
                <p class="form-control">{{ this.cup.champion }}</p>
            </div>
            <div class="input-group-lg input-group">
                <span class="input-group-text">2º </span>
            <div class="input-group-prepend">
            </div>
                <p class="form-control">{{ this.cup.secondPlace }}</p>
            </div>
        </b-col>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cup: {}
    }
  },

  created() {
    let promise = this.$http.get('https://worldcupapi-gabs.azurewebsites.net/api/cup/' + this.$route.params.id);

    promise.then(res => res.json())
      .then(cup => this.cup = cup, err => console.log(err));
  }

  }
</script>

<style>
</style>
