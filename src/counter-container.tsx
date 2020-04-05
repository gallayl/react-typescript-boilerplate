import React, { useState } from 'react'
import { Counter } from './counter-component'

export const CounterContainer: React.FunctionComponent = () => {
  const [values, setValues] = useState<number[]>([])

  return (
    <div>
      <button
        onClick={() => {
          const newValues = []
          for (let index = 0; index < 1000; index++) {
            newValues.push(Math.round(Math.random() * 1000))
          }
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
