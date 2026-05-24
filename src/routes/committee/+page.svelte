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
		class="mx-auto my-8 flex w-10/12 flex-col md:w-1/2"
		in:fade={{ duration: 1000 }}
		out:fade={{ duration: 1000 }}
	>
		<div class="mb-8">
			<h1 class="text-4xl font-bold">Meet the Committee</h1>
			<p class="text-xl">The committee is still being formed. Please check back later.</p>
		</div>
	</div>
{/if}
