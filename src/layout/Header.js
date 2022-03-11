import React from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = ({islogged = false}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const user =  (localStorage.getItem('user'));
    console.log(user)
    return (
        <div className="component-header">
            {
                islogged === true &&
                <div className="container-header">
                    <img src="https://global-uploads.webflow.com/5f1a994364b3473c65835692/600594ffe545a748ec998147_20210118_Brumaire_texte.png" alt="" className="logo"/>
                    <div className="link-container-header">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <div className="title-route">Presentation</div>
                        </Link>
                        {
                            user !== null &&
                            <Link to="/faq" style={{textDecoration: "none"}}>
                                <div className="title-route">FAQ</div>
                            </Link>
                        }
                        <Link to="/map" style={{textDecoration: "none"}}>
                            <div className="title-route">Map</div>
                        </Link>
                        {
                            (user === null  ) &&
                            <Link to="/login" style={{textDecoration: "none"}}>
                                <div className="title-route">connexion</div>
                            </Link>
                        }
                        {
                            (user === null ) &&
                            <Link to="/register" style={{textDecoration: "none"}}>
                                <div className="title-route">inscription</div>
                            </Link>
                        }
                    </div>
                    {
                        user !== null &&
                        <div className="content-img">
                            <img
                                className="img-menu"
                                id="basic-button"
                                src="assets/user.svg"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >

                                <MenuItem onClick={handleClose}>
                                    <Link to="/profile" style={{textDecoration: "none"}}>
                                        <div style={{color:"#000"}}>Profil</div>
                                    </Link>
                                </MenuItem>
                                {
                                    <MenuItem onClick={handleClose}>
                                        <Link to="/admin" style={{textDecoration: "none"}}>
                                            <div style={{color:"#000"}}>Admin</div>
                                        </Link>
                                    </MenuItem>
                                }
                                <MenuItem onClick={handleClose}>
                                    <Link to="/logout" style={{textDecoration: "none"}}>
                                        <div style={{color:"#000"}}>logout</div>
                                    </Link>
                                </MenuItem>


                            </Menu>
                        </div>
                    }
                </div>
            }
            {
                islogged === false &&
                <div className="container-header">
                    <img src="https://global-uploads.webflow.com/5f1a994364b3473c65835692/600594ffe545a748ec998147_20210118_Brumaire_texte.png" alt="" className="logo"/>
                    <div className="link-container-header">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <div className="title-route">Presentation</div>
                        </Link>
                        <Link to="/faq" style={{textDecoration: "none"}}>
                            <div className="title-route">Faq</div>
                        </Link>
                        <Link to="/login" style={{textDecoration: "none"}}>
                            <div className="title-route">Connexion</div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;