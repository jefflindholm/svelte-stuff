<script>
  import { onMount } from "svelte";
  import User from "./User.svelte";
  import UserSearch from "./UserSearch.svelte";

  let users;

  function getGitHubUsers() {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => {
        users = data;
      });
  }

  onMount(() => {
    getGitHubUsers();
  });
</script>

<style>
  main {
    font-family: sans-serif;
  }
  .user-list {
    display: flex;
    flex-flow: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .user-list li {
    width: 20%;
    padding: 10px;
  }
</style>

<main>
  <UserSearch />
  {#if users}
  <ul class="user-list">
    {#each users as user}
      <li>
        <User username={user.login} avatar={user.avatar_url}/>
        
      </li>
    {/each}
  </ul>
  {/if}
</main>