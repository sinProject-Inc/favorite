<script lang="ts">
  export let classNames: string;
</script>

<i class="{classNames}"></i>

<style>
  i {
    margin-top: 8px;
    margin-left: 10px;
    margin-right: 15px;
    font-size: 20px;
    cursor: pointer;
    color: #ccc;
    transition: all 0.3s;
    text-align: right;
  }

  i:hover {
    color: #bed946;
  }
</style>
