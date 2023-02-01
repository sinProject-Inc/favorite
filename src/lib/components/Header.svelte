<script lang="ts">
  import sinproject_logo from '$lib/assets/icons/sinproject_logo.png'
  import home_icon from '$lib/assets/icons/home.svg'
  import bookmark_icon_4 from '$lib/assets/icons/bookmark_icon_4.svg'
  import profile_icon from '$lib/assets/icons/profile.jpg'
</script>

<div class="frame flex_row">
  <button>
    <img class="logo" src={sinproject_logo} alt="" />
  </button>
  Menu
  <div class="flex_row flex_right">
    <button>
      <object
        class="svg"
        type="image/svg+xml"
        data={home_icon}
        width="24"
        height="24"
        title="bookmark"
      />
    </button>
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
      <img class="circle" src={profile_icon} alt="" />
    </button>
  </div>
</div>

<style>
  .frame {
    font-size: 5.5vw;
    height: 13.7vw;

    border-bottom: 1px solid #ccc;
  }

  .flex_row {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* gap: 2vw; */
  }

  .logo {
    width: 7.2vw;
  }

  button {
    padding: 2.3vw;
    border: none;
    background-color: transparent;
  }

  .svg {
    width: 5.1vw;
    height: 5.1vw;
    fill: #000;
    opacity: 0.8;
  }

  .circle {
    border-radius: 50%;
    width: 5.5vw;
    height: 5.5vw;
    object-fit: cover;
  }

  .flex_right {
    margin-left: auto;
  }
</style>
