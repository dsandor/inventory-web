<template>
  <div class="boxItem">
    <md-card md-with-hover>
      <md-card-media>
        <!--<img src="assets/card-image-1.jpg" alt="People"> -->
      </md-card-media>

      <md-card-header>
        <div class="md-title">Box Title</div>
        <div class="md-subhead">Box number 5</div>
      </md-card-header>

      <md-card-content>
        Contents of the box.
      </md-card-content>
      
      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>


    </md-card>
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxItem {
  padding: 15px;
  width: 400px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
