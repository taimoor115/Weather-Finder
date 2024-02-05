import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import useData from "./hooks/useWeather";

const App = () => {
  const [city, setCity] = useState("");
  const { data, error } = useData(city);

  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Heading padding={5}>Weather Finder</Heading>
        <Search onSearch={(city) => setCity(city)} />
      </Flex>
      <Flex alignItems={"center"} flexDirection={"column"}>
        {data != null && !error ? (
          <WeatherCard
            name={data?.name}
            description={data?.weather[0].main}
            temp={data?.main.temp}
            humidity={data?.main.humidity}
            pressure={data?.main.pressure}
            speed={data?.wind?.speed}
            minTemp={data?.main.temp_min}
            maxTemp={data?.main.temp_max}
            sea_level={data?.main.sea_level}
          />
        ) : (
          <Heading size={"md"} marginTop={5}>
            Enter Valid City
          </Heading>
        )}
      </Flex>
    </>
  );
};

export default App;
