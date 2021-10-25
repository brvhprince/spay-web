import React, {useState} from 'react';

const Subscribe =(props)=>{
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSub = () => {
        if (email ==='') return alert('Please enter your email address');
        setLoading(true);
        props.handleSend(email);
        setEmail('');
        setLoading(false);
    }
    return(
        <section className="support_home_area">
            <div className="banner_top">
                <div className="container">
                    <div className="row subscribe_form_info">
                        <div className="col-md-12 text-center">
                            <h2 className="f_p t_color f_700">Join 200+ people on launch.</h2>
                            <p>All you need is an email address to get notified once we launch SPAY</p>
                            <form className="mailchimp wow fadeInUp" data-wow-delay="0.6s" method="post">
                                <div className="input-group subcribes">
                                    <input type="email" name="email" className="form-control memail" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="name@domain.com"/>
                                    <button className="btn btn_submit f_size_15 f_500" onClick={handleSub} disabled={loading} type="button">{loading ? 'Processing' : 'Join Launch'}</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Subscribe;