import React from 'react';
import {useForm} from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="view--register">
            <div className="container-register">
                <div className="left-form" >
                    <div className="title-form">Bumaire Register</div>
                </div>
                <div className="right-form">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                        <div className="container-input">
                            <div className="title-input">Username</div>
                            <input {...register('username', { required: true, maxLength: 50,minLength:4 })} />
                        </div>
                        <div className="container-input">
                            <div className="title-input">Password</div>
                            <input {...register('password', { required: true , minLength:5})} />
                        </div>
                        <div className="container-input">
                            <div className="title-input">ScooterId</div>
                            <input {...register('scooterId', { required: true })} />
                        </div>
                        <div className="container-input">
                            <div className="title-input">E-mail</div>
                            <input {...register('mail', { required: true })} />
                        </div>
                        <button className="button-submit">Inscription</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;