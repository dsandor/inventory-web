import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const state = {
  boxes: []
};

const mutations = {
  /*
  addClient(state, client) {
    state.clients.push(client);
  },

  */
  boxList(state, boxes) {
  	state.boxes = boxes;
  },

  updateBoxTitle(state, updateInfo) {
  	console.log('setting box title', updateInfo);

  	let boxes = _.map(state.boxes, (b) => {
  		console.log('box-b:', b);

  		if (b.id === updateInfo.box.id) {
  			b = Object.assign(b, updateInfo.newValues);
  		}

  		return b;
  	});

  	state.boxes = boxes;
  }
};

const actions = {
	getBoxList(context) {
		fetch('http://invenapp.com/api/box')
		.then((response) => response.json())
		.then((boxes) => context.commit('boxList', boxes));
	},

	saveBox(context, box) {
		console.log('Save Box:', JSON.stringify(box));

		fetch('http://invenapp.com/api/box', { 
			method: 'PUT',
			body: JSON.stringify(box),
			headers: {
      	'Accept': 'application/json',
      	'Content-Type': 'application/json'
    	},
		})
		.then(() => {
			console.log('Saved box.');
		})
		.catch((err) => {
			console.error('error saving box:', err);
		});
	},

	deleteBox(context, box) {
		fetch(`http://invenapp.com/api/box/${box.id}`, { 
			method: 'DELETE',
		})
		.then(() => {
			console.log('Deleted box.');
		})
		.catch((err) => {
			console.error('error deleting box:', err);
		});
	}
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
