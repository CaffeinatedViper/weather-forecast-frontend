export interface WeatherData {
  daily: DailyWeatherData;
}

export interface DailyWeatherData {
  time: string[]
  generatedEnergy: number[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  weather_code: number[];
  sunshine_duration: number[];
}
