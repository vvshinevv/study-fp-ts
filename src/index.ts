import { Eq } from "./Eq";

const eqNumber: Eq<number> = {
    equals: (x, y) => x === y
}

function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
    return (a, as) => as.some(item => E.equals(item, a))
}

console.log(elem(eqNumber)(1, [1, 2, 3]))
console.log(elem(eqNumber)(4, [1, 2, 3]))
