import React from "react";
import { LoginUrl, RegisterUrl } from "../config/config";
const Header = () => {

    return (
        <>
            <div className="fixed z-[9999] w-full responsive-bg-header">
                <div className="relative flex items-center justify-between w-full">
                    <div className="header-logo" />
                    
                    <div className="relative flex items-center justify-between left-header-wrapper">
                        <a href={LoginUrl} target="_blank" className="flex justify-center items-center">
                            <span className="header-text text-white">ĐĂNG NHẬP</span>
                        </a>
                        
                        <a href={RegisterUrl} target="_blank" className="flex justify-center items-center">
                            <span className="header-text text-white">ĐĂNG KÝ</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;