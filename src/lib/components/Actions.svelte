<script lang="ts">
  import ActionItem from './ActionItem.svelte'
</script>

<div class="actions">
  <ActionItem classNames="fa fa-bookmark" />
  <ActionItem classNames="fa fa-reply" />
  <ActionItem classNames="fa fa-retweet" />
  <ActionItem classNames="fa fa-heart" />
</div>

<style>
  .actions {
    bottom: 20px;
    right: 20px;
    display: block;
    text-align: right;
  }
</style>
