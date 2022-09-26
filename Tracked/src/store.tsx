import { createContainer } from 'react-tracked'
import { createContext, ReactNode, useCallback, useContext, useMemo, useReducer, useState } from 'react'

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

const initialState: IState = {
	count: 0,
	count2: 0,
	count3: 0,
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

// const reducer = (state: IState, { type, payload }: IActions): IState => {
// 	switch (type) {
// 		case 'INCREMENT':
// 			return { ...state, count: state.count + 1 }
// 		case 'DECREMENT':
// 			return { ...state, count: state.count - 1 }
// 		case 'RESET':
// 			return { ...state, count: 0 }
// 		case 'INCREMENT2':
// 			return { ...state, count2: state.count2 + 1 }
// 		case 'DECREMENT2':
// 			return { ...state, count2: state.count2 - 1 }
// 		case 'RESET2':
// 			return { ...state, count2: 0 }
// 		case 'INCREMENT3':
// 			return { ...state, count3: state.count3 + 1 }
// 		case 'DECREMENT3':
// 			return { ...state, count3: state.count3 - 1 }
// 		case 'RESET3':
// 			return { ...state, count3: 0 }
// 		case 'SET_COUNT3':
// 			return payload ? { ...state, count3: payload } : state
// 		default:
// 			return state
// 	}
// }

// const useValue = (): IPropsProvider => {
// 	const [{ count, count2, count3 }, dispatch] = useReducer(reducer, initialState)
// 	const derivedCounter = useMemo(() => count + count2, [count, count2])

// 	const increment = useCallback(() => dispatch({ type: ActionType.INCREMENT }), [dispatch])
// 	const decrement = useCallback(() => dispatch({ type: ActionType.DECREMENT }), [dispatch])
// 	const reset = useCallback(() => dispatch({ type: ActionType.RESET }), [dispatch])
// 	const increment2 = useCallback(() => dispatch({ type: ActionType.INCREMENT2 }), [dispatch])
// 	const decrement2 = useCallback(() => dispatch({ type: ActionType.DECREMENT2 }), [dispatch])
// 	const reset2 = useCallback(() => dispatch({ type: ActionType.RESET2 }), [dispatch])
// 	const increment3 = useCallback(() => dispatch({ type: ActionType.INCREMENT3 }), [dispatch])
// 	const decrement3 = useCallback(() => dispatch({ type: ActionType.DECREMENT3 }), [dispatch])
// 	const reset3 = useCallback(() => dispatch({ type: ActionType.RESET3 }), [dispatch])
// 	const setCount3 = useCallback((payload: number) => dispatch({ type: ActionType.SET_COUNT3, payload }), [dispatch])

// 	return { count, count2, count3, derivedCounter, increment, decrement, reset, increment2, decrement2, reset2, increment3, decrement3, reset3, setCount3 }
// }

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


const useValue = (): IPropsProvider => {
	const [count, setCount] = useState(initialState.count)
	const [count2, setCount2] = useState(initialState.count2)
	const [count3, setCount3] = useState(initialState.count3)
	const derivedCounter = useMemo(() => count + count2, [count, count2])
	const increment = () => setCount((c) => c + 1)
	const increment2 = () => setCount2((c) => c + 1)
	const increment3 = () => setCount3((c) => c + 1)
	const decrement = () => setCount((c) => c - 1)
	const decrement2 = () => setCount2((c) => c - 1)
	const decrement3 = () => setCount3((c) => c - 1)
	const reset = () => setCount(0)
	const reset2 = () => setCount2(0)
	const reset3 = () => setCount3(0)
	return {
		count,
		count2,
		count3,
		derivedCounter,
		increment,
		increment2,
		increment3,
		decrement,
		decrement2,
		decrement3,
		reset,
		reset2,
		reset3,
		setCount3,
	}
}

// const storeContext = createContext({} as IPropsProvider)
// export const useStore = () => useContext(storeContext)

// export const StoreProvider = ({ children }: IProps) => (
// 		<storeContext.Provider value={useValue()}>{children}</storeContext.Provider>
// 	)

export const { Provider: StoreProvider, useTrackedState: useStore } = createContainer(() => ([useValue(), {} as unknown as () => void] as const));
