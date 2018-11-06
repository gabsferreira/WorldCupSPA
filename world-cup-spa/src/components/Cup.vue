<template>
    <div>
        <b-jumbotron header="World Cup" lead="Bootstrap 4 Components for Vue.js 2" >
        <p>For more information visit website</p>
        </b-jumbotron>
        <b-card-group columns>
            <div>
                <b-card>
                <p>{{ this.cup.champion }}</p>
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
