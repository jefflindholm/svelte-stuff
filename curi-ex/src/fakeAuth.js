import { writable, get } from "svelte/store";

const store = writable(localStorage.getItem('store')== 'true');
store.subscribe(v => localStorage.setItem('store', v));

export default {
  subscribe: store.subscribe,
  login: () => { store.set(true); },
  logout: () => { store.set(false); console.log('logging out'); },
  authenticated: () => get(store)
};
