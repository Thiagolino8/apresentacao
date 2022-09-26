import create from 'zustand'

interface Store {
  count: number
  countByHalf: () => number
  setCount: (count: number) => void
  reset: () => void
  double: () => void
}

export const useStore = create<Store>()((set, get) => ({
  count: 0,
  countByHalf: () => (get()?.count ?? 0) / 2,
  double: () => set((state) => ({ count: state.count * 2 })),
	setCount: (count: number) => set({count}),
	reset: () => set({count: 0}),
}))