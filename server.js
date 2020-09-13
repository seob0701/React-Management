const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
