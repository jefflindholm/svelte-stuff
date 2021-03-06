
import { browser } from "@hickory/browser";
import { createRouter, announce } from "@curi/router";

import routes from "./routes";
import app from "./components/App.svelte";

const router = createRouter(browser, routes, {
  sideEffects: [
    announce(({ response }) => {
      return `Navigated to ${response.location.pathname}`;
    })
  ]
});

const target = document.body;
const view = new app({ target, props: { router } });
