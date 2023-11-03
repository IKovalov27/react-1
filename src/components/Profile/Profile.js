import css from "./Profile.module.css";

export const Profile = ({imgUrl, username, email, age}) => {
    return (
      <div>
        <img className={css.image} src={imgUrl} alt={username} width="120" height="120" />
        <p class={css.alert}>
          <b>Username: </b> {username}
        </p>
        <p class={css.alert}>
          <b>Email: </b> {email}
        </p>    
        <p class={css.alert}>
          <b>Age: </b> {age}
        </p>
      </div>
    );
};