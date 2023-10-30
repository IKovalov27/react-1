import { PilotList } from "./PilotList";

/* const jacob = { 
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
} */


const pilots = [
  {
    "id": "1",
    "name": "Jacob Mercer",
    "email": "j.mercer@mail.com",
    "age": 32,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSDHwbsJksZlqccC_Hdmaf75zl3VG0aTDnUQxS0uBbL9EjMOjejBe2fPQb9Gyh2rZ8w&usqp=CAU"
  },
  {
    "id": "2",
    "name": "Adrian Cross",
    "email": "a.cross@mail.com",
    "age": 27,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIxJh17uuyzMZG_I-EnV_O_u98uYFEax1Mmn74kb1H2ErmDSKePL8l7TVDPKps-lwLXw&usqp=CAU"
  },
  {
    "id": "3",
    "name": "Olendau Jackson",
    "email": "o.jackson@mail.com",
    "age": 39,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Vmtqupl5WKIsVe83rJSzJmWfIn-sdOq9P8Rk8iY7ymK6ZhgRrNv85sgYAjwHUsCiik0&usqp=CAU"
  }
]



export const App = () => {
  return (
    <div>
      <h1>Top rated pilots</h1>
      <PilotList pilots={pilots} />
    </div>
  )
};
