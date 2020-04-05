import React, { useEffect, useState } from 'react'

export const Counter: React.FunctionComponent<{ default: number }> = props => {
  const [currentCount, setCurrentCount] = useState(props.default)

  useEffect(() => {
    setCurrentCount(props.default)
  }, [props.default])

  return (
    <span>
      <button onClick={() => setCurrentCount(currentCount + 1)}>+</button>
      <input
        defaultValue={`${currentCount.toString()}/${props.default.toString()}`}
        style={{
          color: currentCount === props.default ? 'darkgreen' : 'red',
        }}
      />
      <button onClick={() => setCurrentCount(currentCount - 1)}>-</button>
    </span>
  )
}
