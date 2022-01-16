import { createStore, action } from "easy-peasy";

const store = createStore({
  playlist: [],
  total: "",
  addSong: action((state, payload) => {
    state.playlist.push(payload);
  }),
  
});

export default store;
