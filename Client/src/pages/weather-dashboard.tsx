import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCcw } from "lucide-react";

const WeatherDashboard = () => {
  const { coordinates, error, getLocation, isLoading } = useGeolocation();
  console.log(coordinates);
  return (
    <div className="space-y-4 ">
      {/* Favourite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight ">My Location</h1>
        <Button variant={"outline"} size={"icon"}>
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
      {/* Current and Hourly weather */}
    </div>
  );
};

export default WeatherDashboard;
