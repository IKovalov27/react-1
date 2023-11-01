import { PilotList } from "./PilotList";
import { HiLightningBolt } from "react-icons/hi";
import pilots from '../pilots.json';






export const App = () => {
  return (
    <div>
      <h1>Top rated pilots</h1>
      <HiLightningBolt />
      <PilotList pilots={pilots} />
    </div>
  )
};
