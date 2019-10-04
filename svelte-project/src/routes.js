import { prepareRoutes } from "@curi/router";

import Home from "./components/Home.svelte";
import Contact from "./components/Contact.svelte";
import Method from "./components/Method.svelte";
import NotFound from "./components/NotFound.svelte";
import Login from "./components/Login.svelte";
import Logout from "./components/Logout.svelte";
import auth from "./store/auth";

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    respond() {
      return {
        body: Home
      };
    }
  },
  {
    name: "Contact",
    path: "contact",
    respond({ match }) {
      console.log(match);
      console.log(auth.authenticated);
      if (!auth.authenticated()) {
        return {
          redirect: {
            name: 'Login',
            params: { next: match.location.pathname },
          },
          meta: {
            status: 302,
          },
        };
      } else {
        return {
          body: Contact
        }
      }
    },
    children: [
      {
        name: "Method",
        path: ":method",
        respond() {
          return {
            body: Method
          };
        }
      }
    ]
  },
  {
    name: "Login",
    path: "login",
    respond: () => {
      if (auth.authenticated()) {
        return {
          redirect: {
            name: "Home"
          }
        };
      }
      return {
        body: Login
      };
    }
  },
  {
    name: "Logout",
    path: "logout",
    respond: () => {
      if (!auth.authenticated()) {
        return {
          redirect: {
            name: "Home"
          }
        };
      }
      return {
        body: Logout
      };
    }
  },
  {
    name: "NotFound",
    path: "(.*)",
    respond() {
      return {
        body: NotFound
      };
    }
  }
]);
