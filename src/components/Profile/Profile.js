import css from "./Profile.module.css";

export const Profile = ({imgUrl, username, email, age}) => {
    return (
      <div>
        <img className={css.image} src={imgUrl} alt={username} width="120" height="120" />
        <p className={css.alert}>
          <b>Username: </b> {username}
        </p>
        <p className={css.alert}>
          <b>Email: </b> {email}
        </p>    
        <p className={css.alert}>
          <b>Age: </b> {age}
        </p>
      </div>
    );
};