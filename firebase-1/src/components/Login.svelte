<script>
  import { onMount, tick } from "svelte";
  import { currentUser } from "../stores/user";

  function createLoginButton() {
    // FirebaseUI config.
    var uiConfig = {
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          console.log(authResult);
          return false;
        }
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(async () => {
        await tick();
        createLoginButton();
      })
      .catch(error => alert(error));
  }
  onMount(() => createLoginButton());
</script>

{#if $currentUser}
  <button on:click={signOut}>Logout</button>
{:else}
  <div id="firebaseui-auth-container" />
{/if}
