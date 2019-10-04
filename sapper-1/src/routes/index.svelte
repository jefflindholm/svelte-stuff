<script>
  import { onMount } from "svelte";

  let showAddForm = false;
  let newFeedUrl = "https://news.ycombinator.com/rss";
  let rssList = [];
  let feedsData = [];

  onMount(async () => {
    const newRssList = await fetch("/api/feed").then(r => r.json());
    console.log("mount", newRssList);
    rssList = newRssList;
  });

  const reloadFeed = async () => {
    feedsData = await fetch(`/api/refresh`).then(r => r.json());
  };

  const addRssToList = async () => {
    showAddForm = false;
    const { added, rssList: newRssList } = await fetch("/api/feed", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ url: newFeedUrl })
    }).then(r => r.json());
    console.log(added, newRssList);
    if (added) {
      rssList = newRssList;
      reloadFeed();
    }
  };

  const removeUrl = async url => {
    const { removed, rssList: newRssList } = await fetch("/api/feed", {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ url: newFeedUrl })
    }).then(r => r.json());
    console.log(removed, newRssList);
    if (removed) {
      rssList = newRssList;
      reloadFeed();
    }
  };
</script>

<style>
  .container {
    display: flex;
  }
  .left {
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-width: 40%;
  }
  .right {
    display: flex;
    flex: 1;
    padding: 10px;
    flex-direction: column;
  }

  .add-feed {
    display: flex;
  }
  .feed-input {
    flex: 1;
  }
</style>

<svelte:head>
  <title>Sapper RSS Reader</title>
</svelte:head>

{#if showAddForm}
  <div class="add-feed">
    <button on:click={() => (showAddForm = false)}>Cancel</button>
    <input
      class="feed-input"
      type="text"
      placeholder="http://rss.feed.com"
      bind:value={newFeedUrl} />
    <button on:click={addRssToList}>OK</button>
  </div>
{/if}

<div class="container">
  <div class="left">
    <button on:click={() => (showAddForm = true)}>Add</button>

    <ul>
      {#each rssList as feed, i}
        <li>
          {feed}
          <button on:click={() => removeUrl(feed)}>Remove</button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="right">
    <button on:click={reloadFeed}>Reload</button>
    <div class="article-list">
      {#each feedsData as feed}
        <h1>{feed.title}</h1>
        {#each feed.items as item}
          <a href={item.link}>{item.title}</a>
          <br />
          {item.contentSnippet}
          <hr />
        {/each}
      {/each}
    </div>
  </div>
</div>
