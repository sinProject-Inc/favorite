<script lang="ts">
  import LeftMenu from "../../lib/components/left_menu.svelte";

  const is_new_user = false;
</script>

<div class="container">
  {#if !is_new_user}
    <LeftMenu />
  {/if}

  <form>
    <div class="input-div">
      <label for="profile-picture">Picture</label>
      <input type="file" id="profile-picture" name="profile-picture">
    </div>
    <br>

    <div class="input-div">
      <label for="username">UserName</label>
      <input type="text" id="username" name="username" value="" alt="username" required>
    </div>
    <br>

    <div class="input-div">
      <label for="bio">Bio</label>
      <textarea id="bio" name="bio"></textarea>
    </div>
    <br>

    <div class="submit-dev">
      {#if is_new_user}
        <input type="submit" value="Continue">
      {:else}
        <input type="submit" value="Save">
      {/if}
    </div>
  </form>
</div>

<style>
  form {
    width: 600px;
    padding: 40px;
    margin-left: 350px;
    margin-top: 100px;
    vertical-align: middle;
  }


  label {
    color: #7e47e4;
    display: inline-block;
    width: 100px;
    text-align: right;
    padding-right: 10px;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-right: 10px;
  }

  .input-div {
    margin-top: 20px;
  }

  input[type="text"],
  textarea {
    width: calc(100% - 180px);
    font-size: 16px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px;
		border-color:rgba(100, 55, 189, 0.244);
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: pre-line;
    outline-width: 0px;
  }

  input[type="text"]:hover,
  textarea:hover {
    outline-width: 0px;
  }

  .submit-dev {
    width: 100%;
    text-align: center;
  }

  input[type="submit"] {
    width: 400px;
    padding: 10px;
    font-size: 16px;
    background-color: #7e47e465;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  input[type="submit"]:hover {
    background-color: #7e47e4;
  }
</style>
