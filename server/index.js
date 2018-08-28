const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser'); //맨 앞쪽에서 대기하고 있다가 라우터로 넘어가는 확장 기능 모듈 미들웨어 
const User = require('./models/user');
const passport = require('passport');
const localstrategy = require('passport-local').Strategy;


const app = express();
const router = express.Router();

app.use(bodyparser.urlencoded({ extended : true }));
app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

function getIP(req) {
  return req.connection.remoteAddress.split(":").pop();
}

router.get('/', function(req, res) { 
  res.json({ message : 'Api'});
});
router.route('/user')
.get(function(req,res){
User.find(function(err,user){  // find() = 스키마에 있는 모든 데이터를 SELECT 한다. 
  console.log("/GET /api/user");
  if (err){
  res.send(err);}
  res.json(user);
});
})
.post(function(req, res){ 
const user = new User();
user.id = req.body.id; //request 요청 클라이언트에서 서버로 요청
user.password = req.body.password;
user.name = req.body.name;
user.email = req.body.email;
user.address = req.body.address;
user.date = req.body.date;
user.save(function(err){
  if(err){
  res.send(err);} //response 응답 서버에서 클라이언트로 응답
  res.json({ message: '유저 데이터베이스에 성공적으로 저장'});
  console.log("/POST /api/user");
})
});

/*assport.use(new localstrategy({
  usernameField : 'id',
  passwordField : 'password'
}, function( id , password , done){
User.find({
  where: {
    id : id
  }
}).then(function(user){
  if(!user){
    return done(null, false);
  }
  if(user.password !== password){
    return done(null, false);
  }
  return done9null, false;
}).catch(function( err) {
  done(err , null);
});
}));*/


router.route('/login')
.get(function(req, res) {
  res.json({ message : '로그인 api'});
})
.post(function(req, res) { 
  //const user = new User();
  _Loginid = req.body.id;
  _Loginpw= req.body.password; 
  User.findOne({id : _Loginid , password : _Loginpw} , function(err ,user){ //findOne() = 조건.
  }).then((user) => { 
    if(user.id == _Loginid && user.password == _Loginpw) {
      res.json({ message : "로그인 성공"})
      console.log("로그인 성공했다 스바러마");
      if(user.id != _Loginid){
        res.json({ message : "아이디가 잘못됬다 개라슥아"})
        console.log("아이디가 읎다 시바러므ㅏ");
      }
      if(user.password != _Loginpw){
        res.json({ message : "비밀번호가 잘못됬다 개라슥아"})
        console.log("패스워드가 잘못됬따 시바르마");
      }    
    }
  }).catch((err) => {  //예외 잡지 않으면 서버 죽음 . Node js 최대 단점 . 
     res.redirect('localhost:4000/home');
    })
})

router.route('/auth')
.get((req, res) => {
  res.json({ message : "/GET /auth"});
  console.log("/GET /api/auth");
})
.post((req, res) => {
  res.json({ message : "/POST /auth"});
  console.log("/POST /api/auth");
})


router.route('/board')
/*.get(['/board' , '/board/:id'], (req, res) => {
  res.json({ message : "/GET /api/board"});
  console.log("/GET /api/board");
})
.post(['/board' , '/board/:id'], (req, res) => {
  res.json({ message : "/POST /api/board"});
  console.log("/POST /api/board");
})*/


app.use('/api', router);
mongoose.connect ( 'mongodb://localhost/jihwan');
console.log('데이터베이스 연결 성공');

app.listen(3000, () => { // Node js 리눅스 기반 서버로 간리하기 가장 수월하다 .
  console.log ('백앤드 서버 정상 동작중')
});
