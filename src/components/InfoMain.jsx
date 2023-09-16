const InfoMain = ({ weatherData }) => {
  const { country } = weatherData.location
  const { text } = weatherData.current.condition
  const { feelslike_f } = weatherData.current
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col justify-start">
        {country && <span className="text-xl font-light">{country}</span>}
        {feelslike_f && <span className="text-5xl font-semibold">{feelslike_f}&deg;F</span>}
      </div>
      {text && <span className="text-xl font-semibold -rotate-90">{text}</span>}
    </div>
  )
}

export default InfoMain