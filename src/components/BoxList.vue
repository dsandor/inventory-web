<template>
  <div class="boxList">
    <box v-bind:box="box" 
      v-for="box in $store.state.boxes"
      v-bind:key="box.id"
    />
  </div>
</template>

<script>
import Box from './Box';

export default {
  name: 'boxList',
  components: {
    Box
  },
  data () {
    return {
    }
  },
  created() {
    this.$store.dispatch('getBoxList');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 15px;
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
