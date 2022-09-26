import {derived, writable} from 'svelte/store';

export const count = writable(0)
export const setCount = (newCount: number) => count.set(newCount)
export const reset = () => count.set(0)
export const double = () => count.update((count) => count * 2)
export const countByHalf = derived(count, $count => $count / 2)