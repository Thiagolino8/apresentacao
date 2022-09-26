import { createContainer } from 'react-tracked'
import { createContext, ReactNode, useCallback, useContext, useMemo, useReducer, useState, memo } from 'react'
import { useImmerReducer, useImmer } from 'use-immer'
import produce from 'immer'

interface IState {
	count: number
	count2: number
	count3: number
}

enum ActionType {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
	RESET = 'RESET',
	INCREMENT2 = 'INCREMENT2',
	DECREMENT2 = 'DECREMENT2',
	RESET2 = 'RESET2',
	INCREMENT3 = 'INCREMENT3',
	DECREMENT3 = 'DECREMENT3',
	RESET3 = 'RESET3',
	SET_COUNT3 = 'SET_COUNT3',
}

interface IActions {
	type: ActionType
	payload?: number
}

interface IProps {
	children: ReactNode
}

interface IPropsProvider {
	count: number
	count2: number
	count3: number
	derivedCounter: number
	increment: () => void
	increment2: () => void
	increment3: () => void
	decrement: () => void
	decrement2: () => void
	decrement3: () => void
	reset: () => void
	reset2: () => void
	reset3: () => void
	setCount3: (payload: number) => void
}

const initialState: IState = {
	count: 0,
	count2: 0,
	count3: 0,
}

const reducer = ({ count, count2, count3 }: IState, { type, payload }: IActions) => {
	switch (type) {
		case 'INCREMENT':
			count = count + 1
			return
		case 'DECREMENT':
			count = count - 1
			return
		case 'RESET':
			count = 0
			return
		case 'INCREMENT2':
			count2 = count2 + 1
			return
		case 'DECREMENT2':
			count2 = count2 - 1
			return
		case 'RESET2':
			count2 = 0
			return
		case 'INCREMENT3':
			count3 = count3 + 1
			return
		case 'DECREMENT3':
			count3 = count3 - 1
			return
		case 'RESET3':
			count3 = 0
			return
		case 'SET_COUNT3':
			payload ? (count3 = payload) : true
			return
		default:
			return
	}
}

const useValue = (): IPropsProvider => {
	const [{ count, count2, count3 }, dispatch] = useImmerReducer(reducer, initialState)
	const derivedCounter = useMemo(() => count + count2, [count, count2])

	const increment = useCallback(() => dispatch({ type: ActionType.INCREMENT }), [dispatch])
	const decrement = useCallback(() => dispatch({ type: ActionType.DECREMENT }), [dispatch])
	const reset = useCallback(() => dispatch({ type: ActionType.RESET }), [dispatch])
	const increment2 = useCallback(() => dispatch({ type: ActionType.INCREMENT2 }), [dispatch])
	const decrement2 = useCallback(() => dispatch({ type: ActionType.DECREMENT2 }), [dispatch])
	const reset2 = useCallback(() => dispatch({ type: ActionType.RESET2 }), [dispatch])
	const increment3 = useCallback(() => dispatch({ type: ActionType.INCREMENT3 }), [dispatch])
	const decrement3 = useCallback(() => dispatch({ type: ActionType.DECREMENT3 }), [dispatch])
	const reset3 = useCallback(() => dispatch({ type: ActionType.RESET3 }), [dispatch])
	const setCount3 = useCallback((payload: number) => dispatch({ type: ActionType.SET_COUNT3, payload }), [dispatch])

	return {
		count,
		count2,
		count3,
		derivedCounter,
		increment,
		decrement,
		reset,
		increment2,
		decrement2,
		reset2,
		increment3,
		decrement3,
		reset3,
		setCount3,
	}
}

// const useValue = (): IPropsProvider => {
// 	const [count, setCount] = useState(initialState.count)
// 	const [count2, setCount2] = useState(initialState.count2)
// 	const increment = useCallback(() => setCount((c) => c + 1), []);
// 	const increment2 = useCallback(() => setCount2((c) => c + 1), []);
// 	const decrement = useCallback(() => setCount((c) => c - 1), []);
// 	const decrement2 = useCallback(() => setCount2((c) => c - 1), []);
// 	const reset = useCallback(() => setCount(0), []);
// 	const reset2 = useCallback(() => setCount2(0), []);
// 	const state = {
// 		count,
// 		count2,
// 		increment,
// 		increment2,
// 		decrement,
// 		decrement2,
// 		reset,
// 		reset2,
// 	};
// 	const setState = () => ({
// 		setCount,
// 		setCount2,
// 	});
// 	return [state, setState] as const;
// };

// const useValue = (): IPropsProvider => {
// 	const [count, setCount] = useImmer(initialState.count)
// 	const [count2, setCount2] = useImmer(initialState.count2)
// 	const [count3, setCount3] = useImmer(initialState.count3)
// 	const derivedCounter = useMemo(() => count + count2, [count, count2])
// 	const increment = () => setCount((c) => c + 1)
// 	const increment2 = () => setCount2((c) => c + 1)
// 	const increment3 = () => setCount3((c) => c + 1)
// 	const decrement = () => setCount((c) => c - 1)
// 	const decrement2 = () => setCount2((c) => c - 1)
// 	const decrement3 = () => setCount3((c) => c - 1)
// 	const reset = () => setCount(0)
// 	const reset2 = () => setCount2(0)
// 	const reset3 = () => setCount3(0)
// 	return {
// 		count,
// 		count2,
// 		count3,
// 		derivedCounter,
// 		increment,
// 		increment2,
// 		increment3,
// 		decrement,
// 		decrement2,
// 		decrement3,
// 		reset,
// 		reset2,
// 		reset3,
// 		setCount3,
// 	}
// }

// const storeContext = createContext({} as IPropsProvider)
// export const useStore = () => useContext(storeContext)

// export const StoreProvider = ({ children }: IProps) => (
// 	<storeContext.Provider value={useValue()}>{children}</storeContext.Provider>
// )

export const { Provider: StoreProvider, useTrackedState: useStore } = createContainer(
	() => [useValue(), 0 as unknown as () => void] as const
)
const obj = {
	count: 0,
	foo: {
		bar: {},
		orr:{}
	}
}
