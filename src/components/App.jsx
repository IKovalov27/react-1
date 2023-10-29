const jacob = { 
  id: `1`,
  name: `Jacob Mercer`,
  email: `j.mercer@mail.com`,
  age: `32`,
  avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSDHwbsJksZlqccC_Hdmaf75zl3VG0aTDnUQxS0uBbL9EjMOjejBe2fPQb9Gyh2rZ8w&usqp=CAU`,
};

export const App = () => {
  return <div>
    <div>
      <img src={jacob.avatar} alt={jacob.name} width="120" height="120" />
      <p>
        <b>Username: </b> {jacob.name}
      </p>
      <p>
        <b>Email: </b> {jacob.email}
      </p>
      <p>
        <b>Age: </b> {jacob.age}
      </p>
    </div>
  </div>
};
