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
                <div className="left-form" style={{backgroundImage: "https://global-uploads.webflow.com/5f1a994364b3473c65835692/6141ca7a85516e850583a86c_Scoot_Beige.jpg"}}>
                    <div className="title-form">Bumaire Register</div>
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
                        <div className="container-input">
                            <div className="title-input">ScooterId</div>
                            <input {...register('scooterId', { required: true })} />
                        </div>
                        <div className="container-input">
                            <div className="title-input">mail</div>
                            <input {...register('mail', { required: true })} />
                        </div>
                        <button className="button-submit">Connexion</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;