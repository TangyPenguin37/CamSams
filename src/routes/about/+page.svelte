<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { faqs } from './_faqs.js';
	import jQuery from 'jquery';

	let visible = false;
	let answers = [false, false, false, false];

	onMount(() => {
		visible = true;
	});

	/**
	 * @param {number} index
	 */

	function toggleAnswer(index) {
		answers = answers.map((answer, i) => {
			if (i === index) {
				jQuery(`.answer-${i}`).slideToggle();
				return !answer;
			} else if (answer) {
				jQuery(`.answer-${i}`).slideUp();
				return false;
			}
			return answer;
		});
	}
</script>

{#if visible}
	<div
		class="mx-auto my-8 flex w-10/12 flex-col md:w-1/2"
		in:fade={{ duration: 1000 }}
		out:fade={{ duration: 1000 }}
	>
		<div class="mb-8">
			<h1 class="text-4xl font-bold">About The Cambridge Sams</h1>
			<p class="text-xl">
				We are a non-profit grassroots organisation advancing the interests of Sams all over the
				University of Cambridge.
			</p>
		</div>
		<div class="mb-8">
			<h2 class="text-3xl font-bold">FAQ</h2>
			<ul class="text-xl">
				{#each faqs as item, i}
					<li class="mt-4">
						<button on:click={() => toggleAnswer(i)}>
							{answers[i] ? '↑' : '↓'}
							<span class="question-{i} underline-animation" class:underlined={answers[i]}
								>{item.question}</span
							>
						</button>
						<p class="answer-{i}" style="display: none;">{item.answer}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="mb-8">
			<h2 class="text-3xl font-bold">Constitution</h2>
			<p class="text-xl">
				The constitution of The Cambridge Sams can be found <a
					href="/constitution.pdf"
					class="underline">here</a
				>.
			</p>
		</div>
	</div>
{/if}
