import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import {
  CHANGE_KEYWORD,
  SEARCH,
  START,
  STOP
} from './mutation-types'


const state = {
  keyword: '',
  gifs: [],
  remainingNumber: allRange(75),
  resultNumber: 0,
  history: [],
  nowShuffle: false
}

function allRange(num) {
    if (typeof num !== 'number') {
        return null;
    }

    const args = [];
    for (let i = 1; i <= num; i++) {
        args.push(i);
    }

    return args;
}

function getGIFs (query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch('http://api.giphy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC')
          .then(res => res.json())
}

const actions = {
  [CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword)
  },

  [SEARCH] ({ commit, state }) {
    getGIFs(state.keyword)
      .then(data => {
        commit(SEARCH, data)
      })
  },

  [START] ({ commit , state}) {
    commit(START, state)
  },
  [STOP] ({ commit ,state}) {
    commit(STOP, state)
  }
}

const getters = {
  gifs: state => state.gifs
}

const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [SEARCH] (state, gifs) {
    state.gifs = gifs.data
  },

  [START] (state) {
   if (!state.nowShuffle) {
            state.history.push(state.resultNumber);
        }
        state.nowShuffle = true;
  },
  [STOP] (state) {
  if (!state.nowShuffle) {
            return;
        }

        const length = state.remainingNumber.length;
        const i = Math.floor(Math.random() * length);
        state.resultNumber = state.remainingNumber[i];
        state.remainingNumber.splice(i, 1);
        state.nowShuffle = false;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})