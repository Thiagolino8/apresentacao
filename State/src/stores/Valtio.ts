import { proxy } from 'valtio'
import { derive } from 'valtio/utils'

export const baseProxy = proxy({
	count: 0,
	setCount: (count: number) => (countProxy.count = count),
	reset: () => (countProxy.count = 0),
	double: () => (countProxy.count *= 2),
})

export const countProxy = derive({
	countByHalf: get => get(baseProxy).count / 2
}, {
	proxy: baseProxy
})