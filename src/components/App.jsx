const jacob = { 
  id: `1`,
  name: `Jacob Mercer`,
  email: `j.mercer@mail.com`,
  age: `32`,
  avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSDHwbsJksZlqccC_Hdmaf75zl3VG0aTDnUQxS0uBbL9EjMOjejBe2fPQb9Gyh2rZ8w&usqp=CAU`,
};

const olendau = {
  id: `3`,
  name: `Olendau Jackson`,
  email: `o.jackson@mail.com`,
  age: `39`,
  avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Vmtqupl5WKIsVe83rJSzJmWfIn-sdOq9P8Rk8iY7ymK6ZhgRrNv85sgYAjwHUsCiik0&usqp=CAU`,
}

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

    <div>
      <img src={olendau.avatar} alt={olendau.name} width="120" height="120" />
      <p>
        <b>Username: </b> {olendau.name}
      </p>
      <p>
        <b>Email: </b> {olendau.email}
      </p>
      <p>
        <b>Age: </b> {olendau.age}
      </p>
    </div>
  </div>
};
