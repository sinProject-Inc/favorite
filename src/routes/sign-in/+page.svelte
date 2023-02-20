<script lang="ts">
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	let pin_input_element: HTMLInputElement

	const redirect_url = $page.url.searchParams.get('redirect_url') ?? ''
	const encoded_redirect_url = encodeURIComponent(redirect_url)

	onMount(() => {
		document.onfocus = (event): void => {
			if (event.target instanceof HTMLInputElement) event.target.select()
		}

		pin_input_element.select()
	})
</script>


<div>
	<div class="container">
		<div class="center-container card-parent">
				<form
					method="POST"
					action="/pin-code?/sign_in&redirect_url={encoded_redirect_url}"
				>
					<div>
						<h1 class="form-title">Sign In</h1>
						<h2 class="form-title-opacity">or create a new account if you don't have one.</h2>
					</div>

					<div class="button-space">
						<input
							class=""
							type="email"
							name="email"
							placeholder="Enter email"
							required
							bind:this={pin_input_element}
						/>
						<button type="submit">Continue</button>
						<input type="hidden" name="translated_pin_code" value="PIN code"/>
					</div>
				</form>
		</div>
	</div>
</div>


<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70vh;
	}

	form {
		width: 100%;
		padding: 1rem;
		margin: 0.75rem;
		border-radius: 6px;
		border-color: #7e47e453;
	}

	.form-title {
		text-align: center;
		color: #7e47e4;
		margin-bottom: 1rem;
		font-size: 30px;
		font-weight: 900;
	}

	.form-title-opacity {
		text-align: center;
		color: #7e47e4;
		opacity: 0.7;
		font-size: medium;
	}

	input {
		outline-width: 0px;
		padding-top: 7px;
		padding-bottom: 7px;
		border-bottom: solid 1px;
		border-color:rgba(100, 55, 189, 0.244);
		padding-left: 1rem;
		padding-right: 1rem;
		height: 50px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	input:focus {
		outline-width: 0px;
	}

	input::placeholder {
		color: #7e47e4;
		opacity: 0.6;
	}

	.button-space {
		display: flex;
		column-gap: 0.5rem;
		margin-top: 1rem;
		flex-direction: column;
	}

	button {
		height: 40px;
		margin-top: 1rem;
		color: #FFFFFF;
		background-color: #7e47e465;
		border-radius: 120px;
	}

	button:hover {
		background-color: #7e47e4;
	}
</style>
