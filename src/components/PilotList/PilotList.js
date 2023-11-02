import { Profile } from "../Profile/Profile";
import { List } from "./PilotList.styled";

export const PilotList = ({ pilots }) => {
    return (
        <ul style={List}>
            {pilots.map(pilot => {
                return (
                    <li key={pilot.id}>
                        <Profile 
                            imgUrl={pilot.avatar}
                            username={pilot.username}
                            age={pilot.age}
                            email={pilot.email}
                        />
                    </li>
                );
            })};
        </ul>
    )
}