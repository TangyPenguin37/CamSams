<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import faqs from './_faqs.json';
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
	<div class="mx-auto my-8 flex w-10/12 flex-col md:w-1/2">
		<div class="mb-8" in:fade={{ duration: 1000, delay: 0 }} out:fade={{ duration: 1000 }}>
			<h1 class="text-4xl font-bold">About The Cambridge Sams</h1>
			<p class="text-xl">
				We are a non-profit grassroots organisation advancing the interests of Sams all over the
				University of Cambridge. It is true that we are a new community, but we have big ambitions.
			</p>
			<div class="h-4"></div>
			<p class="text-xl">
				View our constitution <a href="/constitution.pdf" class="underline">here</a>.
			</p>
		</div>
		<div class="mb-8" in:fade={{ duration: 1000, delay: 500 }} out:fade={{ duration: 1000 }}>
			<h2 class="text-3xl font-bold">Our Missions</h2>
			<h3 class="text-2xl">Growth</h3>
			<p class="text-xl">
				Please feel free/encouraged to invite any other Sams that you know of in Cambridge. Our
				influence is somewhat proportional to our size, and without numbers we cannot hope to
				achieve the change and recognition we know we deserve.
			</p>
			<div class="h-4"></div>
			<h3 class="text-2xl">Outreach</h3>
			<p class="text-xl">
				Once our membership is in triple digits, we may apply for society status and request funding
				from the university. In a few years, hopefully famous Sams will be invited to give talks,
				and alumni Sams will be asked for further funding to cover advertising, merchandise, and
				free formals for the Cambridge Sams.
			</p>
		</div>
		<div class="mb-8" in:fade={{ duration: 1000, delay: 1000 }} out:fade={{ duration: 1000 }}>
			<h2 class="text-3xl font-bold">FAQs</h2>
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
	</div>
{/if}
