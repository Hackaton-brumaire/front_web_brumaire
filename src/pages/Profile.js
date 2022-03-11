import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [point, setPoint] = useState(0);
    const [arrayTicket, setArrayTicket] = useState([]);

    const changeCoupon = () => {
        console.log("changeCoupon")
    }

    const changeTest = () => {
        setPoint(100)
        setArrayTicket({"cc":"cc"})
    }

    console.log(arrayTicket)

    const onSubmit = (data) => console.log(data);
    return (
        <div className="view--profile">
            <div className="title-header">Profile</div>
            <div className="container-profile">
                <div className="left-part">
                    <div className="data-profile-container">
                        <img src="" className="round-avatar-profile"/>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                            <div className="container-input">
                                <div className="title-input">Username</div>
                                <input {...register('username', { required: true })} />
                            </div>
                            <div className="container-input">
                                <div className="title-input">Password</div>
                                <input type="password" {...register('password', { required: true })} />
                            </div>
                            <div className="container-input">
                                <div className="title-input">ScooterId</div>
                                <input {...register('scooterId', { required: true })} />
                            </div>
                            <div className="container-input">
                                <div className="title-input">Mail</div>
                                <input {...register('mail', { required: true })} />
                            </div>
                            <button className="button-submit">Enregister</button>
                        </form>
                    </div>
                </div>
                <div className="right-part">
                    <div className="container-coupon">
                        <div className="content-description">Roule ma poule !</div>
                        <div className="content-description font">Fait des kilomettres est gagne des recharges gratuites !!! </div>
                        <ProgressBar color="success" now={point} label={`${point}%`} />
                        <div className="content-change">
                            <div>
                                <img src="assets/recharge.png" alt=""/>
                            </div>
                            {
                                (point === 100 && arrayTicket.length !== 0) &&
                                <div className="button-change-coupon" onClick={()=> changeCoupon()}>Change</div>
                            }
                            {
                                ( point >= 0 && arrayTicket.length === 0 ) &&
                                <div className="button-change-coupon disabledButton" >Change</div>
                            }
                           </div>
                        <div className="content-display-coupon">
                            <div className="content-coupon">
                                <img src="assets/coupon.png" onClick={()=> changeTest()} alt="coupon"/>
                                <div className="title-container">
                                    <div className="title-coupon">Numero : jdezjdzejzdej</div>
                                    <div className="title-coupon">Created: 22/22/22</div>
                                    <div className="title-coupon">Disponible jusqu'au: 22/22/22</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;