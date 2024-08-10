import React from "react";
import { LoginUrl, RegisterUrl, PaymentPageUrl, GroupUrl,FacebookUrl, DiscordUrl } from "../config/config";
const Header = () => {

    return (
        <>
            <div className="fixed z-[9999] w-full responsive-bg-header">
                <div className="header-wrapper">
                    <div className="header-logo" />
                    <a href={PaymentPageUrl} className="header-pay-btn" target="_blank" />
                    <a href={PaymentPageUrl} className="header-download-btn" target="_blank" />

                    <div className="relative flex items-center justify-between left-header-wrapper">
                        <a href={LoginUrl} target="_blank" className="flex justify-center items-center">
                            <span className="header-text text-white">ĐĂNG NHẬP</span>
                        </a>
                        
                        <a href={RegisterUrl} target="_blank" className="flex justify-center items-center">
                            <span className="header-text text-white">ĐĂNG KÝ</span>
                        </a>
                    </div>
                </div>
                <div className="header-btm-wrapper">
                    <a className="fb-link" href={FacebookUrl} target="_blank"/>
                    <a className="community-link" href={GroupUrl} target="_blank"/>

                    <a className="discord-link" href={DiscordUrl} target="_blank"/>

                </div>

            </div>
        </>
    );
}
export default Header;