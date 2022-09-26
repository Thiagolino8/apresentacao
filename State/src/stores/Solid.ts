import { createSignal } from "solid-js";

export const [count, setCount] = createSignal(0);
export const countSetter = (count: number) => setCount(count);
export const reset = () => setCount(0);
export const double = () => setCount(count() * 2);
export const countByHalf = () => count() / 2;