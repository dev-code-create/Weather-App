import { ForecastData } from "@/api/types";

interface HourlyTemperatureProps {
  data: ForecastData;
}

const WeatherForecast = ({ data }: HourlyTemperatureProps) => {
  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
