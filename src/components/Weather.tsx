import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherData {
  main: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    id: number;
    description: string;
  }[];
}
interface Props {
  name: string;
}

const Weather = ({ name }: Props) => {
  const [data, setData] = useState<WeatherData[]>([]);
  useEffect(() => {
    const key = "dc21c72ba250b9a48686466b13666f0c";
    const city = name;
    axios
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
      .then((res) => setData([res.data]))
      .catch((err) => console.log("Error" + err));
  }, [name]);
  console.log(data);

  return (
    <>
      <ul>
        {data.map((d) => (
          <li key={d.weather[0].id}>{d.weather[0].description}</li>
        ))}
      </ul>
    </>
  );
};

export default Weather;
