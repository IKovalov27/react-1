import { HiMail } from "react-icons/hi";

export const Profile = ({imgUrl, name, email, age}) => {
    return (
      <div>
        <img src={imgUrl} alt={name} width="120" height="120" />
        <p>
          <b>Username: </b> {name}
        </p>
        <p>
          <b>Email: </b> {email}
        </p>    
        <p>
          <b>Age: </b> {age}
        </p>
      </div>
    );
  };