import React, {useState} from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ServiceData from '../components/Service/ServiceData';
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Service from "../components/Service/Service";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const handleSubscriber = email => {
        if (email === '') return;
        setLoading(true);
        fetch('https://www.colorbrace.com/subscribe', {method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email})})
            .then(res=>res.json())
            .then((data)=>{
                setLoading(false);
                if (data.status === 200) {
                    alert(data.message);
                }else {
                    alert('An error occurred: '+data.message)
                }

            })
            .catch((err) => {
                setLoading(false);
                alert(err.message || 'An error occurred retry')
            });
    }
        return(
            <div className="body_wrapper">
                    <CustomNavbar mClass="menu_four" nClass="w_menu"/>
                    <Banner/>
                    <HowItWorks />
                    <Service ServiceData={ServiceData}/>
                    <Subscribe handleSend={handleSubscriber} loading={loading} />
                    <Footer fClass="pt_150" />
            </div>
        )
}
export default Home;