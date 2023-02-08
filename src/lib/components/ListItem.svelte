<script lang="ts">
  export let url: string
  export let title: string
  export let logo: string
</script>

<div class="link-item">
  <a href="{url}">
    <div class="link-item-title">
      <div>{logo} {title}</div>
    </div>
  </a>
</div>


<style>
  .link-item {
    display: block;
    text-align: left;
    margin-bottom: 20%;
  }

  .link-item a {
    text-decoration: none;
    color: rgb(126, 71, 228);
  }

  .link-item .link-item-title {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }
</style>
