import { writable, get } from "svelte/store";

const store = writable(false);

export default {
  subscribe: store.subscribe,
  login: () => { store.set(true); },
  logout: () => { store.set(false); console.log('logging out'); },
  authenticated: () => get(store)
};
