import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { added_full_name, added_user_info, added_user_type } from '../../redux/user/actions';
// import { SetCookie } from '../hooks/Cookies';
// import { setLocalStorage } from '../hooks/useLocalStorage';
// import { useAxios } from '../hooks/UseAxios';

const AuthGuard = ({ children }) => {

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const axios = useAxios();
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(true);

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.post("/users");
    //         const { status } = response.data;
    //         if (status === 404 || status === 400) {
    //             localStorage.clear();
    //             SetCookie("ask", "", -1);
    //             setLoading(false);
    //             navigate("/");
    //         }

    //         if (response.data.status) {
    //             setIsAuth(true);

    //             // set user type
    //             const data = response.data?.data;
    //             dispatch(added_user_type(data?.type))
    //             const userType = data?.type
    //             const hashUserType = btoa(userType)
    //             setLocalStorage("utype", hashUserType)
    //             dispatch(added_user_info(data));
    //             dispatch(added_full_name(data?.full_name));
    //             setLoading(false);
    //         }
    //     })();
    //     // eslint-disable-next-line
    // }, [])

    return (
        <>
            {loading ?
                // loader spinner
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
                :
                (isAuth ? children : <Navigate replace to="/" state={{ from: pathname }} />)}
        </>
    );
};

export default AuthGuard;