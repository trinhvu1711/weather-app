const Input = ({ inputValue, setInputValue }) => {
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <input onChange={handleInput} value={inputValue} type="text" size={30} className="px-4 py-2 border border-white rounded-full shadow-lg outline-none bg-gray-400/20" placeholder="Enter location" />
  )
}

export default Input