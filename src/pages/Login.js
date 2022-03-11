import React from 'react';
import {useForm} from "react-hook-form";
import AuthService from "../api/AuthService";
import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const user =  localStorage.getItem("user")
    const onSubmit = (data) => {
        AuthService.login(data).then(res => {
            localStorage.setItem("user", res.data)
        });
        history.push("/");
    };

    return (
        <div className="view--login">
            <div className="container-login">
                <div className="left-form">
                    <div className="title-form">Brumaire</div>
                </div>
                <div className="right-form">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                       <div className="container-input">
                           <div className="title-input">Username</div>
                           <input {...register('username', { required: true })} />
                       </div>
                       <div className="container-input">
                           <div className="title-input">Password</div>
                           <input {...register('password', { required: true })} />
                       </div>
                       <button className="button-submit">Connexion</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;