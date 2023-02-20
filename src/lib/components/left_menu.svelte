<script lang="ts">
  import ListItem from './list_item.svelte'

  const is_login = true;
</script>

<div class="left-menu">
  <div>
    <div class="service-logo">
      <a href="/">
        <h1>Favorite</h1>
      </a>
    </div>

    <div class="link-list">
      {#if is_login}
        <ListItem url="/" title="Home" logo="🏠" />
        <ListItem url="#!" title="Notice" logo="📨" />
        <ListItem url="#!" title="Post" logo="📮" />
        <ListItem url="/profile" title="Profile" logo="😃" />
        <ListItem url="#!" title="Others" logo="📦" />
        <ListItem url="#!" title="SignOut" logo="👋" />
      {:else}
        <ListItem url="/sign-in" title="SignIn" logo="✏️" />
      {/if}
    </div>
  </div>
</div>


<style>
  .left-menu {
    position: fixed;
    width: 250px;
    height: 100%;
    padding: 10px;
    border-right: solid 1px;
    border-color: rgba(153, 153, 153, 0.349);
  }

  .left-menu .service-logo {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20%;
  }

  .left-menu .service-logo a {
    text-decoration: none;
    color: #000;
  }

  .left-menu .link-list {
    display: block;
    padding-left: 25%;
    padding-right: 25%;
    width: 80%;
    text-align: center;
  }
</style>
