<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { gsap } from 'gsap';

	let visible = false;
	let expanded = false;

	const gsapCursorGrow = () => gsap.to('.cursor_ball-big', { scale: 4, duration: 0.3 });
	const gsapCursorShrink = () => gsap.to('.cursor_ball-big', { scale: 1, duration: 0.3 });

	onMount(() => {
		visible = true;
		const bigBall = document.querySelector('.cursor_ball-big');
		const smallBall = document.querySelector('.cursor_ball-small');

		const updateHoverables = () => {
			document.querySelectorAll('a, button').forEach((el) => {
				el.removeEventListener('mouseenter', gsapCursorGrow);
				el.removeEventListener('mouseleave', gsapCursorShrink);
				el.addEventListener('mouseenter', gsapCursorGrow);
				el.addEventListener('mouseleave', gsapCursorShrink);
			});
		};

		document.body.addEventListener('mousemove', (e) => {
			gsap.to(bigBall, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.4 });
			gsap.to(smallBall, { x: e.clientX - 5, y: e.clientY - 7, duration: 0.1 });
		});

		new MutationObserver(updateHoverables).observe(document.body, {
			childList: true,
			subtree: true
		});

		updateHoverables();
	});
</script>

<div class="cursor pointer-events-none hidden md:block">
	<div class="cursor_ball cursor_ball-big fixed left-0 top-0 z-[100] mix-blend-difference">
		<svg height="30" width="30">
			<circle cx="15" cy="15" r="12" stroke-width="0" class="fill-[#f7f8fa]"></circle>
		</svg>
	</div>
	<div class="cursor_ball cursor_ball-small fixed left-0 top-0 z-[100] mix-blend-difference">
		<svg height="10" width="10">
			<circle cx="5" cy="5" r="4" stroke-width="0" class="fill-[#f7f8fa]"></circle>
		</svg>
	</div>
</div>

{#if visible}
	<nav
		class="fixed top-0 z-10 hidden w-full items-center justify-between p-4 transition-all duration-1000 md:flex"
		class:bg-[#313230]={page.url.pathname !== '/'}
		class:text-black={page.url.pathname === '/'}
		class:text-white={page.url.pathname !== '/'}
	>
		<div
			class="flex items-center text-white transition-all duration-1000"
			class:invisible={page.url.pathname === '/'}
		>
			<a href="/" class="text-2xl font-bold">The Cambridge Sams</a>
		</div>
		<div class="flex items-center text-2xl">
			<a href="/" class="underline-animation mr-4" class:underlined={page.url.pathname === '/'}
				>Home</a
			>
			<a
				href="/about"
				class="underline-animation mr-4"
				class:underlined={page.url.pathname === '/about'}>About</a
			>
			<a
				href="/committee"
				class="underline-animation mr-4"
				class:underlined={page.url.pathname === '/committee'}>Committee</a
			>
		</div>
	</nav>

	<nav
		class="fixed top-0 z-30 w-full p-4 text-white transition-all duration-1000 md:hidden"
		class:bg-black={page.url.pathname !== '/'}
	>
		<div class="z-30 flex items-center justify-between">
			<a
				href="/"
				class="z-30 text-2xl font-bold transition-all duration-1000"
				class:opacity-0={page.url.pathname === '/'}
				on:click={() => (expanded = false)}>The Cambridge Sams</a
			>
			<button
				class="text-3xl"
				aria-label="Toggle navigation"
				on:click={() => (expanded = !expanded)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 transition-all duration-1000"
					fill="none"
					viewBox="0 0 24 24"
					stroke={page.url.pathname === '/' ? 'black' : 'white'}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
		</div>
		{#if expanded}
			<div
				class="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-200"
				class:hidden={page.url.pathname === '/'}
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}
				on:click={() => (expanded = false)}
				on:keydown={(e) => e.key === 'Enter' && (expanded = false)}
				role="button"
				tabindex="0"
				aria-label="Close navigation"
			></div>
			<div
				class="fixed right-0 z-30 mt-4 flex flex-col space-y-4 p-4 {page.url.pathname !== '/'
					? 'bg-black text-white'
					: 'text-black'} rounded-bl-lg"
				transition:fade={{ duration: 200 }}
			>
				<a
					href="/"
					class="block text-right text-xl"
					on:click={() => (expanded = false)}
					in:fly={{ y: -100, duration: 250 }}>Home</a
				>
				<a
					href="/about"
					class="block text-right text-xl"
					on:click={() => (expanded = false)}
					in:fly={{ y: -100, duration: 400 }}>About</a
				>
				<a
					href="/committee"
					class="block text-right text-xl"
					on:click={() => (expanded = false)}
					in:fly={{ y: -100, duration: 550 }}>Committee</a
				>
			</div>
		{/if}
	</nav>

	{#key page.url.pathname}
		{#if visible}
			<div
				in:fade={{ duration: 200, delay: 400 }}
				out:fade={{ duration: 200 }}
				class="flex min-h-screen flex-col items-center justify-center"
			>
				{#if page.url.pathname !== '/'}
					<div class="h-16"></div>
				{/if}
				<slot />
			</div>
		{/if}
	{/key}
{/if}
