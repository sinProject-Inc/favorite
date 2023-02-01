<script lang="ts">
  import bookmark_icon_4 from '$lib/assets/icons/bookmark_icon_4.svg'
  import three_point_leader_icon from '$lib/assets/icons/three_point_leader.svg'
</script>

<div class="icons_row icons_padding">
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      ><path
        d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"
      /></svg
    >
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      ><path
        d="M12 3c5.514 0 10 3.685 10 8.213 0 5.04-5.146 8.159-9.913 8.159-2.027 0-3.548-.439-4.548-.712l-4.004 1.196 1.252-2.9c-.952-1-2.787-2.588-2.787-5.743 0-4.528 4.486-8.213 10-8.213zm0-2c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c1.585.434 3.101.632 4.523.632 7.098.001 11.914-4.931 11.914-10.159 0-5.64-5.372-10.213-12-10.213z"
      /></svg
    >
  </button>

  <div class="icons_row flex_right">
    <button>
      <object
        class="svg"
        type="image/svg+xml"
        data={bookmark_icon_4}
        width="24"
        height="24"
        title="bookmark"
      />
    </button>
    <button>
      <object
        class="svg"
        type="image/svg+xml"
        data={three_point_leader_icon}
        width="24"
        height="24"
        title="bookmark"
      />
    </button>
  </div>
</div>

<style>
  button {
    padding: 2.3vw;
    border: none;
    background-color: transparent;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* gap: 2vw; */
  }

  svg,
  .svg {
    width: 5.1vw;
    height: 5.1vw;
    fill: #000;
    opacity: 0.8;
  }

  .icons_padding {
    padding: 1.5vw 1vw 0.5vw 1vw;
  }

  .icons_row {
    display: flex;
    flex-direction: row;

    /* border: 1px solid blue; */
  }

  .flex_right {
    margin-left: auto;
  }
</style>
