import React, {useState} from 'react';
import './Register.css';
import Title from './Components/pages/Titlecreate/Title';
import Label from './Components/pages/Labelcreate/Label';
import Input from './Components/pages/Inputcreate/Input';
import {Link} from 'react-router-dom';





const Register = () => {

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

            <button className='Regresar'>
            <Link to="/Login" className="link">
                <img src="https://1.bp.blogspot.com/-J2o7uCILkDU/X2DJmHhtMNI/AAAAAAAAAJo/TJEtHd8AG_8Yz1YEPY4mgjpn5FV7aHmVACLcBGAsYHQ/s0/flecha.png" alt="" height="55px"/>
            </Link> 
            </button>
           
            <img className="logor" src="https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png" alt="" height="200px"/>
            
            
            <Input
             attribute={{
                id: 'Correo',
                name: 'Correo',
                type: 'text',
                placeholder: 'Ingrese su Correo'
            }}
            handleChange={handleChange}
            />
            
            <Input
             attribute={{
                id: 'Nuevousuario',
                name: 'Nuevousuario',
                type: 'text',
                placeholder: 'Ingrese su nombre de usuario'
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
             <Input
             attribute={{
                id: 'confirmcontraseña',
                name: 'confirmcontraseña',
                type: 'password',
                placeholder: 'Ingrese de nuevo su contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            
            />

            { passwordError &&
                <Label className='label-error'>
                contraseña invalida-minimo de 6 digitos
            </Label>
            }
            <table>
            <tr>
                <td>
                <button className='buttonb'>
                <Link to="/Menuhablante" className="link">
                     <img src="https://1.bp.blogspot.com/-Hn29x7nDGPU/X1btyCfru1I/AAAAAAAAAIw/N9Q2B8KgUtYSlidn8LFaT7wXs2g-yaVswCLcBGAsYHQ/s0/379357-128.png" alt="" width="70px" />
                     </Link>
                 </button>
                 </td> 
                 <td>
                 <button className='buttonc'>
                 <Link to="/Menusordo" className="link">
                    <img src="https://1.bp.blogspot.com/-2yTuk1zlMbk/X1bs7D_xxnI/AAAAAAAAAIc/iYH5TjSOZFEy97DocOSa_yl7LmSxUBlCgCLcBGAsYHQ/s0/379448-64.png" alt="" width="70px"  />
                    </Link>
                    </button>
                    </td> 
                    <td>
                 <button className='buttond'>
                   <Link to="/Menuciego" className="link">
                         <img src="https://1.bp.blogspot.com/-qKOfszT2xms/X1btVvCCzlI/AAAAAAAAAIo/kLiI2ukVA0AWVwgEiAjKZYyZxBAC_XIZACLcBGAsYHQ/s0/379444-128.png" alt="" width="70px"  />
                    </Link>
                     </button>
                     </td> 
            </tr>
    
            </table>

            <table className='tabladecomunidad'>
                <tr>
                    <td className='tabladecomunidad1'>
                        <label>. no tengo discapacidades</label>
                    </td>
                    <td className='tabladecomunidad1'>
                    <label>soy sordo-mudo</label>
                    </td>
                    <td className='tabladecomunidad2'>
                        
                        <label>soy ciego</label>
                    </td>
                </tr>
            </table>
            
            <div className="buttona">
            <button className='buttona'>
                INGRESAR
            </button>
            </div>
            
        </div>
          }
        </div>
    )
};


export default Register;
