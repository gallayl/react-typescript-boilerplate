import React, { useState } from 'react'
import { Counter } from './counter-component'

const counterCount = 1000

export const CounterContainer: React.FunctionComponent = () => {
  const [values, setValues] = useState<number[]>([])

  return (
    <div>
      <button
        onClick={() => {
          const newValues = new Array(counterCount).fill(0, 0, counterCount).map(() => Math.round(Math.random() * 1000))
          setValues([...newValues])
        }}>
        randomize
      </button>
      <div>
        {values.map((v, i) => (
          <Counter default={v} key={i} />
        ))}
      </div>
    </div>
  )
}
