<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import SvelteTypedJs from 'svelte-typed-js';

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
	<div
		class="wip absolute bottom-[5%] flex w-full justify-center text-center text-2xl"
		in:fade={{ duration: 1000, delay: 1000 }}
		out:fade={{ duration: 1000 }}
	>
		<SvelteTypedJs
			strings={[
				'This site is a work in progress.<br class="block sm:hidden" /> Some information may be missing.'
			]}
			typeSpeed={20}
			startDelay={1000}
			showCursor={window.matchMedia('(min-width: 768px)').matches}
		>
			<span class="typing text-center"></span>
		</SvelteTypedJs>
		<style>
			@media (max-width: 640px) {
				.typed-cursor {
					display: none;
				}
			}
		</style>
	</div>
	<a
		href="https://www.instagram.com/_camsams_"
		class="absolute bottom-6 right-6 hidden md:block"
		target="_blank"
		aria-label="Instagram profile"
		in:fade={{ duration: 1000, delay: 1500 }}
		out:fade={{ duration: 1000 }}
	>
		<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="45"
			height="45"
			viewBox="0 0 30 30"
			class="transform transition-transform duration-500 ease-in-out hover:translate-y-2"
		>
			<path
				d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
			></path>
		</svg> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="45"
			height="45"
			viewBox="0 0 50 50"
			class="transform transition-transform duration-500 ease-in-out hover:translate-y-2"
		>
			<path
				d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
			></path>
		</svg>
	</a>
{/if}

<style>
	.instagram-icon {
		width: 40px;
		height: 40px;
		color: #e1306c;
	}
</style>
