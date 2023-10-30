import { Profile } from "./Profile";

export const PilotList = ({ pilots }) => {
    return (
        <ul>
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