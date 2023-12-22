import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherData {
  main: {
    humditiy: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temo_min: number;
  };
  weather: {
    id: number;
    descrition: number;
  };
}

const Weather = () => {
  const [data, setData] = useState<WeatherData[]>([]);
  useEffect(() => {
    const key = "dc21c72ba250b9a48686466b13666f0c";
    const city = "Lahore";
    axios
      .get<WeatherData[]>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error" + err));
  }, []);
  console.log(data);

  return;
  <div>

  </div>;
};

export default Weather;
