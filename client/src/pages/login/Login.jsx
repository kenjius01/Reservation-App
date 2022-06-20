import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

const Login = () => {
    const [credential, setCredential] = useState({
        username: undefined,
        password: undefined,
    });
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleLogin = async () => {
        // e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('/auth/login', credential);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            navigate('/')
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }
    };

    return (
        <div className='login'>
            <div className='lContainer'>
                <input
                    id='username'
                    type='text'
                    placeholder='username'
                    onChange={handleChange}
                    className='lInput'
                />
                <input
                    id='password'
                    type='password'
                    placeholder='password '
                    onChange={handleChange}
                    className='lInput'
                />
                
                <button disabled={loading} onClick={handleLogin} className='lButton'>
                    {loading ? 'loading' : 'Login'}
                </button>
                {error && <span style={{fontWeight: 'bold',color: 'red', textAlign: 'center'}}>{error.message} </span>}
            </div>
        </div>
    );
};

export default Login;
