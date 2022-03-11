import React from 'react';
import {useForm} from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

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