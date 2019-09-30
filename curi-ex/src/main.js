import { browser } from "@hickory/browser";
import { createRouter, announce } from "@curi/router";
import { parse, stringify } from "qs";

import App from './App.svelte';
import routes from './routes';

const router = createRouter(browser, routes, {
  invisibleRedirects: true,
  history: {
    query: { parse, stringify }
  },
  sideEffects: [
    announce(({ response }) => {
      return `Navigated to ${response.location.pathname}`;
    })
  ]
});

const app = new App({
	target: document.body,
	props: {
    name: 'world',
    router,
	}
});

export default app;
