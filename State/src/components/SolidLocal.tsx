import { createMemo, createSignal } from "solid-js"
import {SolidTemplate} from "../templates/SolidTemplate"

export const SolidLocal = () => {
	const [count, setCount] = createSignal(0)
	const countByHalf = createMemo(() => count() / 2)
	const increment = () => setCount(count() + 1)
	const decrement = () => setCount(count() - 1)
	const reset = () => setCount(0)
	const double = () => setCount(count() * 2)
  return (
		<SolidTemplate count={count} countByHalf={countByHalf} increment={increment} decrement={decrement} reset={reset} double={double} />
	)
}