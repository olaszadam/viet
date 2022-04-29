import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        username:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Bejelentkezés</h2>
                <input type="text" name="username" required
                placeholder="Felhasználónév" value={user.username} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Jelszó" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Bejelentkezés</button>
                    <Link to="/register">Regisztrálj most!</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
