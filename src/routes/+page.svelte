<!-- website for Jebam Studios, a Christian web design company -->
<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div
		class="splash flex h-screen flex-col items-start justify-center gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-16"
		in:fade={{ duration: 1000, delay: 500 }}
		out:fade={{ duration: 1000 }}
	>
		<h1 class="title max-w-2xl text-left text-6xl">We're a Christian web design company.</h1>
		<div class="max-w-xs text-left text-lg opacity-75 md:mt-2 md:text-right">
			<p>
				Thoughtful design, clear messaging, and a strong online presence for your ministry or
				business.
			</p>
			<p>
				<a
					href="/about"
					class="underline-animation"
					in:fade={{ duration: 1000, delay: 1500 }}
					out:fade={{ duration: 1000 }}>Learn more about us. ↓</a
				>
			</p>
		</div>
	</div>
{/if}
