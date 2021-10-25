import React, {Component} from 'react';

class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            emailStatus: false,
        }
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitForm = e => {
        e.preventDefault();
        const {name, email, subject, message} = this.state;

        if (name === '') return alert('Please enter a name');
        if (email === '') return alert('Please enter an email address');
        if (subject === '') return alert('Please enter a subject');
        if (message === '') return alert('Please enter a message');
        this.setState({emailStatus:true})
        fetch('https://www.colorbrace.com/sendmail', {method: 'POST', mode:'no-cors', headers: {'Content-Type': 'application/json'},body:JSON.stringify({name,email,subject,message}) })
            .then((res)=>res.json())
            .then((data)=>{
                if (data.status === 200) {
                    document.getElementById('success').style.display = 'block';
                    this.setState({
                        name: '',
                        email: '',
                        message: '',
                        subject: '',
                        emailStatus:false,
                    });
                }else {
                    document.getElementById('error').style.display = 'block';
                    this.setState({emailStatus:false})
                }
            })
            .catch((error) => {
                alert(error.message || 'An error occurred retry');
                document.getElementById('error').style.display = 'block';
                this.setState({emailStatus:false})
            })


    }
    render(){

        return(
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
                                <p className="f_400 f_size_15">Inktouch Limited, Box 1908 Sunyani Penkwase, Ghana</p>
                            </div>
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:+233541752049">(+233) 54 175 2049</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a href="tel:+233553872291">(+233) 55 387 2291</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:spay@colorbrace.com">spay@colorbrace.com</a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
                            <form className="contact_form_box" method="post" id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" id="name" name="name" placeholder="Your Name" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="email" name="email" id="email" placeholder="Your Email" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div id="success">Your message successfully sent! We will get in touch</div>
                                <div id="error">Oops! There is something wrong. Please try again</div>
                                <button type="button" onClick={this.submitForm} className="btn_three" disabled={this.state.emailStatus}>  {this.state.emailStatus ? 'Processing' : 'Send Message'} </button>
                            </form>


                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Contacts;