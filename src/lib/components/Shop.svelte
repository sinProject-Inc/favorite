<script lang="ts">
  import ActionBar from './ActionBar.svelte'

  import telephone_icon from '$lib/assets/icons/telephone.svg'
  import pin_icon from '$lib/assets/icons/pin.svg'
  import clock_icon from '$lib/assets/icons/clock.svg'

  export let image_src: string
  export let name: string
  export let price = ''
  export let description = ''
</script>

<div class="flex_column">
  <img class="item" src={image_src} alt="" />
  <ActionBar />
  <div class="item_description">
    <div class="flex_row title_row">
      <div style="font-weight: bold;">{name}</div>
      <div>{price}</div>
    </div>
    <div>
      {description}
    </div>
    <div class="flex_row">
      <object
        class="svg"
        type="image/svg+xml"
        data={pin_icon}
        width="24"
        height="24"
        title="bookmark"
      />
      <div>
        <a
          class="link"
          href="https://maps.google.co.jp/maps?q=大阪市西区新町1-9-12+塚本ビル+1F+エフユー"
          >大阪市西区新町1-9-12 塚本ビル 1F</a
        >
      </div>
    </div>
    <div class="flex_row">
      <object
        class="svg"
        type="image/svg+xml"
        data={telephone_icon}
        width="24"
        height="24"
        title="bookmark"
      />
      <div><a class="link" href="tel:06-6543-2177">06-6543-2177</a></div>
    </div>
    <div class="flex_row">
      <object
        class="svg"
        type="image/svg+xml"
        data={clock_icon}
        width="24"
        height="24"
        title="bookmark"
      />
      <div>月曜日-土曜日 16:00-22:30 LO</div>
    </div>
  </div>
</div>

<style>
  .item {
    width: 100%;
  }

  .item_description {
    padding: 0 3vw 3vw 3vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;
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

  object {
    width: 4vw;
    height: 4vw;
    fill: #000;
    opacity: 0.8;
  }

  .link {
    color: rgba(142, 142, 142, 1);
  }

  a {
    text-decoration: none;
  }
</style>
