<script lang="ts">
	import SvelteTemplate from '../templates/SvelteTemplate.svelte'
	import { count, setCount, reset, double, countByHalf } from '../stores/Svelte'

	const increment = () => setCount($count + 1)
	const decrement = () => $count--
</script>

<SvelteTemplate count={$count} {increment} {decrement} {reset} {double} countByHalf={$countByHalf} />
