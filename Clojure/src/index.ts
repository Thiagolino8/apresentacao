function makeFunc() {
	const name = 'Mozilla'
	function displayName() {
		console.log(name)
	}
	return displayName
}

const myFunc = makeFunc()
myFunc()

function makeAdder(x: number) {
	return function (y: number) {
		return x + y
	}
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2))
console.log(add10(2))

class MakeAdder {
	private x: number
	constructor(x: number) {
		this.x = x
	}
	add(y: number) {
		console.log(this.x + y)
	}
}

const classAdd5 = new MakeAdder(5)
const classAdd10 = new MakeAdder(10)

classAdd5.add(2)
classAdd10.add(2)

let number = 0

const increment = () => {
	number += 1
	const number2 = number
	const message = `Incremented to ${number}`

	return () => {
		console.log(`Number: ${number}`)
		console.log(`Number2: ${number2}`)
		console.log(message)
	}
}

const log = increment()
increment()
const log2 = increment()
increment()
log()
log2()
