<script>
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const flavors = ["vanilla", "chocolate", "strawberry"];
  const seasons = ["Spring", "Summer", "Fall", "Winter"];
  let favoriteColor = "";
  let favoriteFlavors = [];
  let favoriteSeason = "";
  let happy = true;
  let name = "";
  let story = "";
</script>

<style>
  div {
    margin-bottom: 10px;
  }

  input,
  select {
    border: solid gray 1px;
    border-radius: 4px;
    padding: 4px;
  }

  input[type="checkbox"],
  input[type="radio"] {
    margin-left: 5px;
  }

  label {
    display: inline-block;
    font-weight: bold;
    margin-right: 5px;
    vertical-align: top;
  }
</style>

<div class="form">
  <div>
    <label>Name</label>
    <input type="text" bind:value={name} />
  </div>
  <div>
    <label>Happy?</label>
    <!-- For checkboxes, bind to the "checked" property rather than "value". -->
    <input type="checkbox" bind:checked={happy} />
  </div>
  <div>
    <label>Favorite Flavors</label>
    {#each flavors as flavor}
      <label>
        <!-- Using "bind:group" with a set of related checkboxes
          makes the value an array of strings. -->
        <input type="checkbox" value={flavor} bind:group={favoriteFlavors} />
        {flavor}
      </label>
    {/each}
  </div>
  <div>
    <label>Favorite Season</label>
    {#each seasons as season}
      <label>
        <!-- Using "bind:group" with a set of related radio buttons
          makes the value a single string. -->
        <input type="radio" value={season} bind:group={favoriteSeason} />
        {season}
      </label>
    {/each}
  </div>
  <div>
    <label>Favorite Color</label>
    <!-- To change a select to a scrollable list
        that allows selecting multiple options,
        add the "multiple" attribute. -->
    <select bind:value={favoriteColor}>
      <option />
      {#each colors as color}
        <!-- <option> elements can have a "value" attribute
            and its value can be a string, number, or object. -->
        <option>{color}</option>
      {/each}
    </select>
  </div>
  <div>
    <label>Life Story</label>
    <textarea bind:value={story} />
  </div>

  <!-- This part just reports the variable values set by binds,
      but only if name has a value. -->
  {#if name}
    <div>
      {name} likes {favoriteColor}, {favoriteSeason}, and is {happy ? 'happy' : 'unhappy'}.
    </div>
    <div>{name}'s favorite flavors are {favoriteFlavors}.</div>
    <div>Story: {story}</div>
  {/if}
</div>
