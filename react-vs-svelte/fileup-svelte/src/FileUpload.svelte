<script>
  export let multiple = true;
  export let files = [];
  const handleChange = e => {
    console.log(e.target.files);
    files = Array.from(e.target.files);
  };
</script>

<input type="file" {multiple} on:change={handleChange} />
<slot name="help">
  <p>Select some files</p>
</slot>
<slot name="filelist">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {#each files as file (file.name)}
        <tr>
          <td>{file.name}</td>
          <td>{file.size}</td>
          <td>{file.type}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</slot>
