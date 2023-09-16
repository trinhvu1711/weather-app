import { useState } from 'react'
import Info from './components/Info'
import InfoMain from './components/InfoMain'
import Input from './components/Input'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [inputValue, setInputValue] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [apiKey] = useState('0b6faa0975a24d59a8b22233231609')

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`

    axios.get(apiUrl)
      .then((response) => {
        setWeatherData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error)
      })
  }, [apiKey, inputValue])

  return (
    <div className="flex flex-col items-center main-content min-h-screen max-w-[50vw] mr-auto ml-auto justify-between p-5 shadow-lg bg-slate-50/20 rounded-lg">
      <div className='w-full text-center'>
        <Input inputValue={inputValue} setInputValue={setInputValue}></Input>
        <div className='mb-20'></div>
        {weatherData && <InfoMain weatherData={weatherData}></InfoMain>}
      </div>
      {weatherData && <Info weatherData={weatherData}></Info>}
    </div>
  )
}

export default App
