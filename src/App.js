import React, { Component } from "react";
import "./App.css";

import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: "윤수빈",
    birthday: "990604",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: "김보라",
    birthday: "960717",
    gender: "여자",
    job: "회사원",
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: "이진아",
    birthday: "970417",
    gender: "여자",
    job: "매니저",
  },
];

class App extends Component {
  render() {
    return customers.map((c) => (
      <Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
      />
    ));
  }
}

export default App;
