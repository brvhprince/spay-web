import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Meet The Guys" tClass="t_color3" TitleP="Meet the minds working on the SPAY Project"/>
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <Teamitem teamImage="Francis.jpg" memberN="Ennin Francis" memberd="Backend Engineer"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <Teamitem teamImage="Prince.jpg" memberN="Akomea Takyi Prince" memberd="UI/UX Designer"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Team;