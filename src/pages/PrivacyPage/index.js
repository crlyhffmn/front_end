import React from "react";
import PrivacyForm from './../../components/PrivacyForm';
import NavbarProfile from './../../components/NavbarProfile';
import Footer from './../../components/Footer';
const PrivacyPage = () => {
    return (
        <>
            <NavbarProfile />
            <div className="row">
                <div className="col-4">
                    {/*Need to add menu component on the side */}
                </div>
                <div className="col-6">
                    <PrivacyForm />
                </div>
                <div className="col-2"></div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPage;