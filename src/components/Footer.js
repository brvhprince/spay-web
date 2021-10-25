import React , {Component} from 'react';
class Footer extends Component {
    render(){
        var {fClass} = this.props;
        return(
            <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400">SPAY &copy; 2021</p>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;