<script lang="ts">
  import Post from "./Post.svelte";

  const reload_url = "javascript:location.reload()";
</script>

<div id="timeline" class="main-contents">
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・1m ago" content="This is a sample post. #sample #post" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・3m ago" content="This is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #post" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・2h ago" content="This is a sample post. #sample #post" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・23h ago" content="This is a sample post. #sample #post" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・ Feb 5" content="This is a sample post. #sample #post" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・ Feb 1" content="This is a sample post. #sample #post" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・ 2 years ago" content="This is a sample post. #sample #post" />
</div>

<style>
  .main-contents {
    margin-left: 350px;
    margin-top: 15px;
    width: 600px;
    border-radius: 5px;
  }
</style>
