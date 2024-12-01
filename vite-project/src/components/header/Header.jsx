import { Button } from '@consta/uikit/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@consta/uikit/Layout';
import Menu from '../menu/Menu';
import React from 'react';
import style from "./Header.module.css";
import { getToken, dropToken } from "../../services/token";
import { useSelector } from 'react-redux';


const Header = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const handleLogout = () => {
        dropToken();
        navigate("/");
    };    
    return (
        <Layout  className={style.Header}>
            <Menu />
            <div className={style.rightBlock}>
            <NavLink to='/profile'>
                <Button view={pathname==="/profile" ? "primary" : "secondary"} label={`${user?.firstName} ${user?.lastName}` || 'Гость'}></Button>
            </NavLink>
            <NavLink to='/login'>
                {getToken() ? <Button view="secondary" onClick={handleLogout} label='Выход'></Button>
                    : <Button view={pathname==="/login" ? "primary" : "secondary"} label='Вход'></Button>}
            </NavLink></div>
        </Layout>
    )
}
export default Header;