import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";

interface Props {
  humidity?: number;
  pressure?: number;
  temp?: number;
  minTemp: number;
  maxTemp: number;
  name?: string;
  sea_level: number;
  description?: string;
  speed?: string;
}

const WeatherCard = ({
  description,
  speed,
  temp,
  humidity,
  pressure,
  minTemp,
  maxTemp,
  name,
  sea_level,
}: Props) => {
  return (
    <>
      <Stack>
        <Flex alignItems={"center"} flexDirection={"column"}>
          <Image src={`./public/${description}.png`} width={"150px"} />
          <Heading padding={2} size="2xl">
            {name}
          </Heading>
          <Heading padding={2} size={"lg"}>
            {temp} F
          </Heading>
          <Heading padding={2} size={"lg"}>
            {description}
          </Heading>
        </Flex>
        <Flex>
          <Flex padding={3} flexDirection={"column"}>
            <Box>Humidity {humidity}</Box>
            <Box>Pressure {pressure}</Box>
            <Box>Wind Speed {speed}</Box>
          </Flex>
          <Flex padding={3} flexDirection={"column"}>
            <Box>Sea Level {sea_level}</Box>
            <Box>MinTemperature {minTemp}</Box>
            <Box>MaxTemperature {maxTemp}</Box>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

export default WeatherCard;
