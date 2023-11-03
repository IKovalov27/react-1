import { Text } from "./Profile.styled";

export const Profile = ({imgUrl, username, email, age}) => {
    return (
      <div>
        <img src={imgUrl} alt={username} width="120" height="120" />
        <Text>
          <b>Username: </b> {username}
        </Text>
        <Text>
          <b>Email: </b> {email}
        </Text>    
        <Text>
          <b>Age: </b> {age}
        </Text>
      </div>
    );
  };