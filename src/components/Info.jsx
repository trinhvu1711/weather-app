const Info = ({ weatherData }) => {
  const { feelslike_f, humidity, wind_mph } = weatherData.current
  return (
    <div className="grid w-full grid-cols-3 p-5 text-white rounded-lg shadow-2xl bg-slate-400/10 gap-x-4">
      <div className="flex flex-col items-center justify-center opacity-100">
        {feelslike_f && <span className="text-xl font-semibold">{feelslike_f}&deg;F</span>}
        <span className="font-light">Feels Like</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        {humidity && <span className="text-xl font-semibold">{humidity}%</span>}
        <span className="font-light">Humidity</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        {wind_mph && <span className="text-xl font-semibold">{wind_mph} MPH</span>}
        <span className="font-light">Winds</span>
      </div>
    </div>
  )
}

export default Info