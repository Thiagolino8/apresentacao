<script lang="ts">
  export let count: number
  export let countByHalf: number
  export let increment: () => void
  export let decrement: () => void
  export let reset: () => void
  export let double: () => void
</script>

<div class="flex flex-col items-center justify-start flex-1 text-center">
	<div class="pt-0 stat">
		<p class="stat-value">count: {count}</p>
		<p class="stat-value">countByHalf: {countByHalf}</p>
	</div>
	<div class="btn-group">
		<button class="btn btn-primary" on:click={increment}>Increment </button>
		<button class="btn btn-secondary" on:click={decrement}>Decrement </button>
		<button class="btn btn-error" on:click={reset}>Reset </button>
		<button class="btn btn-warning" on:click={double}>Double </button>
	</div>
</div>