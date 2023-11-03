import { Profile } from "../Profile/Profile";
import css from "./PilotList.module.css";

export const PilotList = ({ pilots }) => {
    return (
        <ul className={css.list}>
            {pilots.map(pilot => {
                return (
                    <li className={css.listItem} key={pilot.id}>
                        <Profile 
                            imgUrl={pilot.avatar}
                            username={pilot.username}
                            age={pilot.age}
                            email={pilot.email}
                        />
                    </li>
                );
            })}
        </ul>
    )
}