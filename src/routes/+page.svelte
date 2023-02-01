<script lang="ts">
  import header_image from '$lib/assets/images/images_photo_fu.jpg'
  import pork_katsu_image from '$lib/assets/images/pork_katsu.jpeg'
  import amoraisu from '$lib/assets/images/amoraisu.jpeg'

  import Item from '../lib/components/Item.svelte'
  import Shop from '../lib/components/Shop.svelte'
  import Header from '../lib/components/Header.svelte'
</script>

<div class="flex_column">
  <Header />
  <div class="item_list">
    <Shop
      image_src={header_image}
      name="洋食の歩（エフ・ユー）"
      description="立ち飲み居酒屋・バー、弁当"
    />

    <Item
      image_src={amoraisu}
      name="アモライス"
      price="¥500"
      description="キャリア30年のホテルシェフが作るオムライス。 ご飯がチキンライスではなく当店オリジナルバターライスです。"
    />

    <Item
      image_src={pork_katsu_image}
      name="ポークカツ"
      price="¥500"
      description="揚げたてのポークカツをシャリアピンソースで"
    />
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    font-size: 3.6vw;
  }

  .flex_column {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  .item_list {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    background-color: #fafafa;

    flex: 1;
    overflow: auto;
  }
</style>
