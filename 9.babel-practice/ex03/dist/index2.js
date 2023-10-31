// 블록 스코프(es6)
var users = [{
  no: 1,
  name: "마이콜",
  email: "michol@gmail.com"
}, {
  no: 2,
  name: "둘리",
  email: "dooly@gmail.com"
}];

// 객체분해(es6)
function print(_ref) {
  var {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(es6)
  console.log(`${no}:${name}:${email}`);
}

// for ~ of(es6)
for (var user of users) {
  print(user);
}
