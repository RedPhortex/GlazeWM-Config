import { type WeatherOutput, type WeatherStatus } from "zebar";
import { Chip } from "@mui/joy";

const Weather = ({ weather }: { weather: WeatherOutput }) => {
  const getIcon = (weatherStatus: WeatherStatus) => {
    switch (weatherStatus) {
      case "clear_day":
        return <i className="nf nf-weather-day_sunny" />;
      case "clear_night":
        return <i className="nf nf-weather-night_clear" />;
      case "cloudy_day":
        return <i className="nf nf-weather-day_cloudy" />;
      case "cloudy_night":
        return <i className="nf nf-weather-night_alt_cloudy" />;
      case "light_rain_day":
        return <i className="nf nf-weather-day_sprinkle" />;
      case "light_rain_night":
        return <i className="nf nf-weather-night_alt_sprinkle" />;
      case "heavy_rain_day":
        return <i className="nf nf-weather-day_rain" />;
      case "heavy_rain_night":
        return <i className="nf nf-weather-night_alt_rain" />;
      case "snow_day":
        return <i className="nf nf-weather-day_snow" />;
      case "snow_night":
        return <i className="nf nf-weather-night_alt_snow" />;
      case "thunder_day":
        return <i className="nf nf-weather-day_lightning" />;
      case "thunder_night":
        return <i className="nf nf-weather-night_alt_lightning" />;
    }
  };

  return (
    <>
      {weather && (
        <Chip className="weather">
          {getIcon(weather.status)}&nbsp;
          {Math.round(weather.celsiusTemp)}°C
        </Chip>
      )}
    </>
  );
};

export default Weather;
