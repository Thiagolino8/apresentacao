import { atom } from 'jotai'

export const countAtom = atom(0)
export const setCountAtom = atom(null, (_get, set, count: number) => set(countAtom, count))
export const resetCountAtom = atom(null, (_get, set) => set(countAtom, 0))
export const doubleCountAtom = atom(null, (get, set) => set(countAtom, get(countAtom) * 2))
export const countByHalfAtom = atom((get) => get(countAtom) / 2)