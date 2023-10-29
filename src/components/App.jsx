const jacob = { 
  id: `1`,
  name: `Jacob Mercer`,
  email: `j.mercer@mail.com`,
  age: `32`,
  avatar: `https://cdn-icons-png.flaticon.com/512/1077/1077012.png`,
};

export const App = () => {
  return <div>
    <div>
      <p>
        <b>Username:</b>
        {jacob.name}
      </p>
      <p>
        <b>Email:</b>
        {jacob.email}
      </p>
      <p>Age</p>
      <img src="avatar" alt="" />
    </div>
  </div>
};
