<script lang="ts">
  import LeftMenu from "../lib/components/LeftMenu.svelte";
  import RightMenu from "../lib/components/RightMenu.svelte";
  import TimeLine from "../lib/components/TimeLine.svelte";
</script>

<svelte:head>
	<title>Favorite</title>
</svelte:head>

<div class="container">
  <LeftMenu />
  <TimeLine />
  <RightMenu />
</div>
