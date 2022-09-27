import { atom, computed } from 'nanostores'

export const count = atom(0)
export const setCount = (newCount: number) => count.set(newCount)
export const reset = () => count.set(0)
export const double = () => count.set(count.get() * 2)
export const countByHalf = computed(count, count => count / 2)
