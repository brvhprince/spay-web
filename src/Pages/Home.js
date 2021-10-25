import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ServiceData from '../components/Service/ServiceData';
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Service from "../components/Service/Service";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const Home = () => {
    const handleSubscriber = email => {
        console.log('email', email);
        fetch('https://www.colorbrace.com/subscribe', {method: 'POST', mode:'no-cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})})
            .then(res=>res.json())
            .then((data)=>{
                if (data.status === 200) {
                    alert(data.message);
                }else {
                    alert('An error occurred: '+data.message)
                }
            })
            .catch((err) => alert(err.message || 'An error occurred retry'));
    }
        return(
            <div className="body_wrapper">
                    <CustomNavbar mClass="menu_four" nClass="w_menu"/>
                    <Banner/>
                    <HowItWorks />
                    <Service ServiceData={ServiceData}/>
                    <Subscribe handleSend={handleSubscriber} />
                    <Footer fClass="pt_150" />
            </div>
        )
}
export default Home;