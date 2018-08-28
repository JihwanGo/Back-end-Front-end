import React, { Component } from 'react';
import axios from 'axios';

class RegisterCom extends Component {
    constructor (props) { // 딕셔너리 구조체 . key value 
        super(props);
        this.state ={
        //   users : {   
        //     id: null,
        //     password: null,
        //     name: null,
        //     email: null,
        //     address: null
        //   },
        }
    }

    send_users_info = (e) => {
       //if(e) e.preventDefault(); // Prevent Refresh

        // console.log(this.refs.user_id.value);
        // console.log(this.refs.user_password.value);

        const user_info = {
            id: this.refs.user_id.value,
            password: this.refs.user_password.value,
            name: this.refs.user_name.value,
            email: this.refs.user_email.value,
            address : this.refs.user_address.value
        }

        console.log(user_info);
        axios.post("http://localhost:3000/api/user", user_info) //
        .then(function (response){
            console.log( response);
        })    
    }

    render(){
        return (

            <div>
                <div className="container">
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h2>회원가입</h2>
                        <p className="lead">아몰랑 회원가입해</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">니엄봉</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">ㅋ</h6>
                                        <small className="text-muted">2323n</small>
                                    </div>
                                    <span className="text-muted">3</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">23</h6>
                                        <small className="text-muted">2323</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">T2323</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    <span>-$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">느금</h4>
                            <form className="needs-validation" hre="/" onSubmit={ this.send_users_info }>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label >아이디</label>
                                        <input type="text" className="form-control" placeholder="ttt" ref="user_id" required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label >패스워드</label>
                                        <input type="password" className="form-control" placeholder="!@#" ref="user_password" required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                         </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label >이름</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                    
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" ref="user_name" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label >Email</label>
                                    <input type="email" className="form-control"  placeholder="you@example.com" ref="user_email" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label >주소</label>
                                    <input type="text" className="form-control" placeholder="1234 Main St" ref="user_address"/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">등록</button>
                            </form>
                        </div>
                    </div>
                </div> {/* container */}
            </div>
        )
    }
}
export default RegisterCom;