import React, { useEffect } from "react";
const PopupLogin = ({ show, onClose }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const login = () => {
    console.log(username);
    console.log(password);
  };

  if (!show) return null;
  return (
    <div id="popup" className="popup">
      <div
        className="popup-container"
        onClick={(e) => {
          if (e.target.className === "popup-container") {
            e.stopPropagation();
            setUsername("");
    setPassword("");
            onClose();
          }
        }}
      >
        <div className="popup-login">
          <div className="login">
            <p>Đăng Nhập</p>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="password-wrapper">
            <a className="italic pointer text-[#ff7a23]" href="#">Quên mật khẩu?</a>
            <a className="italic pointer text-[#ff7a23]" href="#">Đăng ký</a>
            </div>
            
            <a className="login-btn" onClick={login} />
          </div>
          <div className="login-fb">
            <p className="text-fb-login">Đăng nhập với </p>
            <a className="login-fb-btn" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
