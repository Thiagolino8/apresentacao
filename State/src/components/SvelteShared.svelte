<script lang="ts">
	import SvelteTemplate from '../templates/SvelteTemplate.svelte'
	import { count, setCount, reset, double, countByHalf } from '../stores/Nano'

	const increment = () => setCount($count + 1)
	const decrement = () => $count--
</script>
<h1 class='text-3xl font-bold text-center'>This is a Svelte component</h1>
<SvelteTemplate count={$count} {increment} {decrement} {reset} {double} countByHalf={$countByHalf} />