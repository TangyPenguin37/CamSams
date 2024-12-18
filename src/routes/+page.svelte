<script>
	import { fade } from 'svelte/transition';
</script>

<div class="splash flex h-screen flex-col items-center justify-center">
	<h1 class="title text-left text-5xl font-bold" in:fade={{ duration: 1000 }}>
		The<br />Cambridge<br />Sams
	</h1>
</div>
<p
	class="wip absolute bottom-[5%] w-full text-center text-2xl"
	in:fade={{ duration: 1000, delay: 500 }}
>
	This site is a work in progress - please excuse the mess!
</p>
