<template>
    <div>
        <b-jumbotron header="World Cup" lead="Aqui estão os campeões!" >
        </b-jumbotron>
        <b-card-group columns>
            <div>
                <b-card>
                    <p>{{ this.cup.champion }}</p>
                </b-card>
            </div>
            <div>
                <b-card>
                    <p>{{ this.cup.secondPlace }}</p>
                </b-card>
            </div>
        </b-card-group>
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
    let promise = this.$http.get('https://localhost:44303/api/cup/' + this.$route.params.id);

    promise.then(res => res.json())
      .then(cup => this.cup = cup, err => console.log(err));
  }

  }
</script>

<style>
</style>
