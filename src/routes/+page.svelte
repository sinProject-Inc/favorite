<script lang="ts">
  import LeftMenu from "../lib/components/left_menu.svelte";
  import RightMenu from "../lib/components/right_menu.svelte";
  import TimeLine from "../lib/components/time_line.svelte";
</script>

<svelte:head>
	<title>Favorite</title>
</svelte:head>

<div class="container">
  <LeftMenu />
  <TimeLine />
  <RightMenu />
</div>
