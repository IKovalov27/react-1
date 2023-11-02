import { PilotList } from "./PilotList/PilotList";
import { HiLightningBolt } from "react-icons/hi";
import pilots from '../pilots.json';

const titleStyles = { 
  margin: 8, 
  padding: "12px 16px",
  borderRadius: 4, 
  backgroundColor: "gray", 
  color: "white", 
}

export const App = () => {
  return ( 
    <div> 
      <h1 style={titleStyles}>Top rated pilots <HiLightningBolt /> </h1> 
      <PilotList pilots={pilots} /> 
    </div> 
  ) 
};