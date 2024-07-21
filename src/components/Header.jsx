import React from "react";
const Header = () => {
    return (
        <>
            <div className="fixed z-[100] w-full responsive-bg-header">
                <div className="relative flex items-center justify-between w-full">
                    <div className="header-logo" />
                    
                    <div className="relative flex items-center justify-between left-header-wrapper">
                        <a href={"#"} className="flex justify-center items-center">
                            <span className="header-text text-white">ĐĂNG NHẬP</span>
                        </a>
                        
                        <a href={"#"} className="flex justify-center items-center">
                            <span className="header-text text-white">ĐĂNG KÝ</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;