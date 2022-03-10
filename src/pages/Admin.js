import React, {useState} from 'react';

const Admin = () => {
    const [section, setSection] = useState(true);
    const modifyUser = () => {
        console.log("modifyUser")
    }

    const deleteUser = () => {
        console.log("delete")
    }

    const changeSection = (bool) => {
        setSection(bool);
    }

    return (
        <div className="view--admin">
            <div className="header">
                <div className="header-admin">Administrator</div>
                <div className="choice-section">
                    <div className="title-section-choice" onClick={()=> changeSection(true)}>Section Utilisateur</div>
                    <div className="title-section-choice expt-margin" onClick={()=> changeSection(false)}>Section Scooter</div>
                </div>
            </div>
            <div className="container-admin">
                {
                    section === true &&
                    <div className="container-gestion">
                        <div className="content-gestion">
                            <div className="title-user">UserName</div>
                            <div className="title-user">mail</div>
                            <div className="title-user">scooterId</div>
                            <div className="title-user">created</div>
                            <div className="title-user">modifie</div>
                            <div className="button-change modify" onChange={()=> modifyUser()}>Modify</div>
                            <div className="button-change delete expt-margin-button" onChange={()=> deleteUser()}>Supprimé</div>
                        </div>
                        <div className="content-gestion">
                            <div className="title-user">UserName</div>
                            <div className="title-user">mail</div>
                            <div className="title-user">scooterId</div>
                            <div className="title-user">created</div>
                            <div className="title-user">modifie</div>
                            <div className="button-change modify" onChange={()=> modifyUser()}>Modify</div>
                            <div className="button-change delete expt-margin-button" onChange={()=> deleteUser()}>Supprimé</div>
                        </div>
                        <div className="content-gestion">
                            <div className="title-user">UserName</div>
                            <div className="title-user">mail</div>
                            <div className="title-user">scooterId</div>
                            <div className="title-user">created</div>
                            <div className="title-user">modifie</div>
                            <div className="button-change modify" onChange={()=> modifyUser()}>Modify</div>
                            <div className="button-change delete expt-margin-button" onChange={()=> deleteUser()}>Supprimé</div>
                        </div>
                        <div className="content-gestion">
                            <div className="title-user">UserName</div>
                            <div className="title-user">mail</div>
                            <div className="title-user">scooterId</div>
                            <div className="title-user">created</div>
                            <div className="title-user">modifie</div>
                            <div className="button-change modify" onChange={()=> modifyUser()}>Modify</div>
                            <div className="button-change delete expt-margin-button" onChange={()=> deleteUser()}>Supprimé</div>
                        </div>
                        <div className="content-gestion">
                            <div className="title-user">UserName</div>
                            <div className="title-user">mail</div>
                            <div className="title-user">scooterId</div>
                            <div className="title-user">created</div>
                            <div className="title-user">modifie</div>
                            <div className="button-change modify" onChange={()=> modifyUser()}>Modify</div>
                            <div className="button-change delete expt-margin-button" onChange={()=> deleteUser()}>Supprimé</div>
                        </div>
                    </div>
                }
                {
                    section === false &&
                    <div className="container-gestion">
                        <div className="content-gestion">
                            <div className="title-user">UserName</div>
                            <div className="title-user">mail</div>
                            <div className="title-user">scooterId</div>
                            <div className="title-user">created</div>
                            <div className="title-user">modifie</div>
                            <div className="button-change modify" onChange={()=> modifyUser()}>Modify</div>
                            <div className="button-change delete" onChange={()=> deleteUser()}>Supprimé</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Admin;