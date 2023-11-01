import { PilotList } from "./PilotList";
import { HiLightningBolt } from "react-icons/hi";
import pilots from '../pilots.json';

import styled from "styled-components";


const PageTitle = styled.h1`
  color: red;
`;



export const App = () => {
  return (
    <div>
      <PageTitle>Top rated pilots <HiLightningBolt /> </PageTitle>
      <PilotList pilots={pilots} />
    </div>
  )
};
