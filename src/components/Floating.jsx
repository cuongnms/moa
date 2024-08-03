import React from "react";
import { ApkDownloadUrl, AppStoreUrl, FacebookUrl, GooglePlayUrl, GroupUrl, PaymentPageUrl } from "../config/config";
const Floating = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            <div className="floating-btn">
                <a className="floating-pay-btn" href={PaymentPageUrl} target="_blank" />
                <a className="floating-apk-download" href={ApkDownloadUrl} target="_blank" />
                <a className="floating-as-download" href={AppStoreUrl} target="_blank"/>
                <a className="floating-gg-download" href={GooglePlayUrl} target="_blank"/>
                <a className="floating-fb" href={FacebookUrl} target="_blank"/>
                <a className="floating-group" href={GroupUrl} target="_blank"/>
                <a className="top" onClick={scrollToTop} />
            </div>
        </>
    );
}
export default Floating;