<script lang="ts">
  import ActionBar from './ActionBar.svelte'

  export let image_src: string
  export let name: string
  export let price: string
  export let description: string
</script>

<div class="flex_column">
  <img class="item" src={image_src} alt="" />
  <ActionBar />
  <div class="item_description">
    <div class="flex_row title_row">
      <div style="font-weight: bold;">{name}</div>
      <div>{price}</div>
    </div>
    {description}
  </div>
</div>

<style>
  .item {
    width: 100%;
  }

  .item_description {
    padding: 0 3vw 3vw 3vw;
  }

  .flex_row {
    display: flex;
    flex-direction: row;
    align-items: center;

    /* justify-content: center; */
    gap: 2vw;

    /* border: 1px solid blue; */
  }

  .title_row {
    font-size: 4.4vw;
  }

  .flex_column {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 0vw;
    background-color: #fff;

    width: 100vw;
    /* max-width: 50vh; */

    /* border: 1px solid red; */
  }
</style>
