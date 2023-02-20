<script lang="ts">
  import Post from "./post.svelte";

  const reload_url = "/profile";
</script>

<div id="timeline" class="main-contents">
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・1m ago" content="This is a sample post. #sample #post" image_src=""/>
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・3m ago" content="This is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #postThis is a sample post. #sample #post" image_src="" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・2h ago" content="This is a sample post. #sample #post" image_src="https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・23h ago" content="This is a sample post. #sample #post" image_src="" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・ Feb 5" content="This is a sample post. #sample #post" image_src="" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・ Feb 1" content="This is a sample post. #sample #post" image_src="https://p4.wallpaperbetter.com/wallpaper/544/405/275/horizon-earth-4k-wallpaper-preview.jpg" />
  <Post profile_src="https://picsum.photos/100" user_name="@username" user_link="{reload_url}" time="・ 2 years ago" content="This is a sample post. #sample #post" image_src="" />
</div>

<style>
  .main-contents {
    margin-left: 350px;
    margin-top: 15px;
    width: 600px;
    border-radius: 5px;
  }
</style>
