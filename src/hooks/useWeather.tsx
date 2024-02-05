import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: string;
  };

  // Add other necessary properties
}
const useData = (city: string) => {
  const apiKey = "dc21c72ba250b9a48686466b13666f0c";
  const [error, setError] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);
  useEffect(() => {
    if (city) {
      axios
        .get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((res) => {
          setData(res.data);
          setError("");
        })
        .catch((err) => setError(err.message));
    }
  }, [city]);

  return { data, error };
};

export default useData;
