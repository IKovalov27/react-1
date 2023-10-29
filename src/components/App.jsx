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
      <p>
        <b>Age:</b>
        {jacob.age}
      </p>
      <img src={jacom.avatar} alt={jacom.name} width="80" height="80" />
    </div>
  </div>
};
