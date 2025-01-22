import { API_CONFIG } from "./config"

class WeatheAPI {
  private createURL(endpoint) {
    private createUrl(endpoint: string,params:Record<string,string | number>){
      const searchParam = new URLSearchParams({
        appid: API_CONFIG.API_KEY,
        ...params,
      })
      return `${endpoint}?${searchParam.toString()}`
    }
  
  private fetchData() {}
  async getCurrentWeather() {}
  async getForecast() {}
  async reverseGeoCode() {}
}
