
import image from '~images/logo-texto.png';
import { cookies } from 'next/headers';
import './style.sass';

export default function Login() {
  const isLogged = token
  
  return (
    <>
      <div className="login-container">
        <div className="main-box-login">
          <div className="logo">
            <img src={image} alt="logo do cenap" />
          </div>
          <div className="login-box">
            {isLoggedIn ? (
              <div>Esta ta logado</div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="box">
                  <label><p>Email:</p></label>
                  <input type="text" {...register("email", { required: true })} />
                  {errors.email && (
                    <span style={{ color: "red" }}>
                      {errors.email.message?.toString()}
                    </span>
                  )}          
                </div>
                <div className="box">
                  <label><p>Password:</p></label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="box">
                  <button type="submit" id="log"> Logar </button>
                </div>
              </form>
            )}
          </div>       
        </div>
      </div>
    </>
  );
}