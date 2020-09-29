import React, {useState} from 'react';
import './Login.css';
import Input from './Components/pages/Inputcreate/Input';
import Label from './Components/pages/Labelcreate/Label';
import Title from './Components/pages/Titlecreate/Title';
import {Link} from 'react-router-dom';






const Login = () => {

    const [ user , setUser ] =  useState('');
    const [ password , setPassword ] =  useState('');
    const [ passwordError, setPasswordError] = useState(false)
    const [ isLogin, setIsLogin] = useState(false);
    const [ hasError, setHasError] = useState(false);


    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value)
        }else {
            if(value.length > 6){
                setPasswordError(true);
            } else{
                setPassword(value)
                setPasswordError(false);
            }
            
        }
    };

    function ifMatch (param){
        if (param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Tomas' && param.password ==="gato"){
                let ac ={user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);

            } else{
                setIsLogin(false);
                setHasError(true);
            }
        } else{
            setIsLogin(false);
            setHasError(true);
            }
    };

    function handleSubmit(){
        let account = { user, password }
        if(account) {
            ifMatch(account)
        }
    };

    return (
        
        <div className='login-container'>
            {isLogin ? 'estoy loged':
            <div className='login-content'>
           
            <Title />
            { hasError && 
                <label className='label-alert'> 
                su contraseña o usuario no existe en nuestra plataforma
                </label>
            }
            
            <Input
             attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            
            <Input
             attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            />
            { passwordError &&
                <Label className='label-error'>
                contraseña invalida-minimo de 6 digitos
            </Label>
            }
            
            <div className="button1">
            <button onClick={ handleSubmit} className='button1'>
                INGRESAR
            </button>
            </div>
            <Label  text='¿No tienes una cuenta?'/>
            <div className="button2">
                <button className="button2">
                   <Link to="/Register" className="link"><h1 className="registrate">Registrate ahora</h1></Link> 
                </button>
            </div>
            
            
        
                
            
            <div className="button3">
            <button  className="button3">
                ¿Olvidaste tu contraseña?
            </button>
            </div>
        </div>
          }
        </div>
    )
};

export default Login;
