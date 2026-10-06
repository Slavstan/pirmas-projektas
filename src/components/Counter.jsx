function Counter({ count, setCount }) {
  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((currentCount) => currentCount + 1)}
    >
      Count is {count}
    </button>
  )
}

export default Counter
