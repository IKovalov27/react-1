import { Text } from "./Profile.styled";

export const Profile = ({imgUrl, name, email, age}) => {
    return (
      <div>
        <img src={imgUrl} alt={name} width="120" height="120" />
        <Text>
          <b>Username: </b> {name}
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