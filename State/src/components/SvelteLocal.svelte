<script lang="ts">
	import SvelteTemplate from '../templates/SvelteTemplate.svelte'
	let count = 0

	$: countByHalf = count / 2

	const increment = () => count++
	const decrement = () => count--
	const reset = () => (count = 0)
	const double = () => (count *= 2)
</script>

<SvelteTemplate {count} {countByHalf} {increment} {decrement} {reset} {double} />
