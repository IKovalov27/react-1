import { HiMail } from "react-icons/hi";

export const Profile = ({imgUrl, username, email, age}) => {
    return (
      <div>
        <img src={imgUrl} alt={username} width="120" height="120" />
        <p>
          <b>Username: </b> {username}
        </p>
        <p>
          <b>Email: <HiMail size="15" /> </b> {email}
        </p>    
        <p>
          <b>Age: </b> {age}
        </p>
      </div>
    );
  };