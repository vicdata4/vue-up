import Vue from 'vue';
import Vuex from 'vuex';
import state from './app/state';
import getters from './app/getters';
import mutations from './app/mutations';
import actions from './app/actions';

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    ...state
  },
  getters,
  mutations: {
    ...mutations
  },
  actions
});