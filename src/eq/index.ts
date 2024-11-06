import { struct } from 'fp-ts/Eq'
import { Eq } from 'fp-ts/number'



// const eqNumber: Eq<number> = {
//     equals: (x, y) => x === y
// }

// function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
//     return (a, as) => as.some(item => E.equals(item, a))
// }

// console.log(elem(eqNumber)(1, [1, 2, 3]))
// console.log(elem(eqNumber)(4, [1, 2, 3]))

// const eqPoint: Eq<Point> = {
//     equals: (p1, p2) => p1 === p2 || (p1.x === p2.x && p1.y === p2.y)
// }


const eqPoint = struct({
  x: Eq,
  y: Eq
})