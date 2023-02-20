<script lang="ts">
  import LeftMenu from "../../lib/components/left_menu.svelte";

  const is_me = false;
  const username = "HogeFugo";
  const bio = "bio \n bio bi  biobio n bi  biobio bi  bio \n bio bi  biobio bi bio bi bio bi  biobio bi bio bi bio bi  biobio bi bio bi  biobio bi\n\n\n bio bi  biobio bi";
</script>

<div class="container">
  <LeftMenu />

  <form>
    <div class="image-div">
      <img src="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=800" alt="ProfileImage">
    </div>
    <br>

    <div class="input-div">
      <label for="username">UserName</label>
      <input type="text" id="username" class="username" name="username" value="{username}" alt="username" readonly>
    </div>
    <br>

    <div class="input-div">
      <label for="bio">Bio</label>
      <textarea id="bio" class="bio" name="bio" readonly>{bio}</textarea>
    </div>

    {#if is_me}
      <div class="edit-div">
        <a href="/profile-edit">Edit</a>
      </div>
    {/if}
  </form>
</div>

<style>
  form {
    width: 600px;
    padding: 40px;
    margin-left: 350px;
    margin-top: 20px;
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

  .image-div {
    width: 100%;
    text-align: center;
  }

  .image-div img {
    max-height: 340px;
    max-width: 400px;
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
    border: none;
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

  .username {
    height: 40px;
  }

  .bio {
    height: 200px;
    resize: none;
  }

  .edit-div {
    width: 100%;
    text-align: right;
    margin-top: 20px;
  }

  .edit-div a {
    font-size: 18px;
    font-weight: bold;
    margin-right: calc(100% - 520px);
    color: #7e47e4;
    text-decoration: none;
  }
</style>
