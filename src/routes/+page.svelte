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
		class="splash flex h-screen flex-col items-center justify-center"
		in:fade={{ duration: 1000, delay: 500 }}
		out:fade={{ duration: 1000 }}
	>
		<h1 class="title text-left text-5xl font-bold">
			The<br />Cambridge<br />Sams
		</h1>
	</div>
	<p
		class="wip absolute bottom-[5%] w-full text-center text-2xl"
		in:fade={{ duration: 1000, delay: 1000 }}
		out:fade={{ duration: 1000 }}
	>
		This site is a work in progress.<br class="block sm:hidden" /> Some information may be missing.
	</p>
{/if}
