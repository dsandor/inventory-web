<template>
  <div class="boxItem">
    <md-card md-with-hover>
      <md-card-media>
        <!--<img src="assets/card-image-1.jpg" alt="People"> -->
      </md-card-media>

      <md-card-header>
         <md-layout md-gutter>
          <md-layout md-flex="66">
            <div class="md-title" v-if="!editMode">{{title}}</div>
            <md-input-container v-if="editMode">
              <label>box title</label>
              <md-input placeholder="enter box title" v-bind:value="title" v-model="title"></md-input>
            </md-input-container>
          </md-layout>
          <md-layout md-align="center">
            #{{box.boxNumber}}
          </md-layout>
        </md-layout>
      </md-card-header>

      <md-card-content>
        <md-layout md-gutter>
          <md-layout md-flex="66">
            {{box.description}}
          </md-layout>
          <md-layout md-align="center">
            <img v-bind:src="box.thumbUrl" class="boxImage" />
          </md-layout>
        </md-layout>
      </md-card-content>
      
      <md-card-actions>
        <div v-on:click="toggleEditMode"><md-button>Edit</md-button></div>
        <div v-on:click="printLabel"><md-button>Print</md-button></div>
        <div v-on:click="saveBox"><md-button>Save</md-button></div>
        <div v-on:click="deleteBox"><md-button>Delete</md-button></div>
      </md-card-actions>


    </md-card>
  </div>
</template>

<script>
import _ from 'lodash';
import label from '../label';

export default {
  props: ['box'],
  name: 'box',
  data () {
    return {
      editMode: false
    }
  },
  computed: {
    title: {
      get() {
        return this.$props.box.title;
      },

      set(value) {
        this.$store.commit('updateBoxTitle', {box: this.box, newValues: { title: value }});
      }
    }
  },
  methods: {
    toggleEditMode: function() {
      console.log('toggleEditMode');
      this.editMode = !this.editMode;
    },
    printLabel: function() {
      label.printLabel(this.$props.box.title, this.$props.box.boxNumber, this.$props.box.description);
      return;
    },
    saveBox: function() {
      this.$store.dispatch('saveBox', this.box);
      this.editMode = false;
    },
    deleteBox: function() {
      this.$store.dispatch('deleteBox', this.box);

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

.boxImage {
  height: 80px;
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
