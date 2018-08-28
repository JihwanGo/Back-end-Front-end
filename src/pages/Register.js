import React, { Component } from 'react';
import RegisterCom from'../component/RegisterCom';
import * as api from '../component/api'

class Register extends Component {
    UserReg = async (id,password,name,email,address) => {
        const user = await Promise.all([
            api.getUser(id,password,name,email,address)
        ]);
        console.log(user);

    }
    render() {
        return (
            <div>
                <RegisterCom/>
            </div>
        )
    }
}
export default Register;