import React, { Component } from 'react';
import axios from 'axios';

class LoginCom extends Component {
    send_users_login = (e) => {
        //if(e) e.preventDefault(); // Prevent Refresh
 
         // console.log(this.refs.user_id.value);
         // console.log(this.refs.user_password.value);
         if(e) e.preventDefault();
         const user_login_info = {
             id: this.refs.login_id.value, //값을 가져 오겠다 . 
             password: this.refs.login_password.value
         }
         console.log(user_login_info)
         axios.post("http://localhost:3000/api/login", user_login_info) //서버쪽으로 user_login_info 정보를 post 방식으로 요청 하겠다 . 
         .then(function (response){
             console.log(response);
         })    
     }
    render() 
    {
        return (
            <div>
                <form className="form-signin"  onSubmit={this.send_users_login}>
                    <div className="text-center mb-4">
                        <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">FuckingUsa</h1>
                        <p>계정이 없으신가요 ?  <a href="/register">회원가입</a></p>
                    </div>

                    <div className="form-label-group">
                        <label >ID</label>
                        <input type="id" id="inputid" className="form-control" ref="login_id" placeholder="ID"/>

                    </div>

                    <div className="form-label-group">
                        <label >Password</label>
                        <input type="password" id="inputPassword" className="form-control" ref="login_password" placeholder="Password" required />

                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> 기억하기
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onclick="/">로그인</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; fucking Korea</p>
                
                </form>
                
            </div>
        )
    }
}
export default LoginCom;