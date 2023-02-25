<script lang="ts">
	import Actions from './actions.svelte'

	export let profile_src: string
	export let user_name: string
	export let user_link: string
	export let time: string
	export let content: string
	export let image_src: string
</script>

<div class="post">
	<div class="image-space">
		<a href={user_link}>
			<img class="profile-image" src={profile_src} alt="ProfileImage" />
		</a>
	</div>

	<div class="post-content">
		<div class="meta-username">
			<div class="username">
				<a href={user_link}>
					{user_name}
				</a>
				<!-- ここは何分前/何時間前/日付/何年前の分岐が必要 -->
				<!-- 24h超えたら日付 -->
				<!-- 1y超えたら何年前 -->
				<span class="time">
					{time}
				</span>
			</div>
		</div>

		<div class="content">
			<div class="meta-content-detail">
				<div class="content-detail">
					{content}

					{#if image_src}
						<img src={image_src} alt="PostImage" />
					{/if}
				</div>
			</div>
		</div>

		<Actions />
	</div>
</div>

<style>
	.post {
		background-color: #fff;
		padding: 15px;
		border-bottom: solid 1px;
		border-color: rgba(153, 153, 153, 0.349);
		position: relative;
		text-align: right;
		margin-bottom: 5px;
		display: flex;
		flex-direction: row;
	}

	.post .image-space {
		float: left;
		width: 75px;
	}

	.post a .profile-image {
		width: 75px;
		height: 75px;
		aspect-ratio: 1/1;
		border-radius: 50%;
		float: left;
		top: 10px;
		left: 10px;
	}

	.post .post-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.post .post-content .meta-username {
		text-align: left;
	}

	.post .post-content .meta-username .username {
		color: rgb(126, 71, 228);
		display: inline;
		margin-left: 20px;
	}

	.post .post-content .meta-username .username a {
		text-decoration: none;
		color: rgb(126, 71, 228);
	}

	.post span {
		font-size: 14px;
		color: #999;
		text-align: right;
	}

	.post .post-content .content {
		margin-bottom: 10px;
	}

	.post .post-content .content .meta-content-detail {
		text-align: left;
	}

	.post .content .meta-content-detail .content-detail {
		display: inline-block;
		margin-top: 10px;
		margin-left: 30px;
		width: 450px;
		text-align: left;
	}

	.post .content .meta-content-detail .content-detail img {
		margin-top: 10px;
		margin-bottom: 18px;
		width: 100%;
		height: 100%;
		max-width: 430px;
		max-height: 260px;
		border-radius: 10px;
		aspect-ratio: 16 / 9;
	}
</style>
