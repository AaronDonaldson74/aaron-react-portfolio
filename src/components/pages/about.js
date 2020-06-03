import React from 'react';
import profilePicture from "../../../static/assets/images/bio/Aaron-Kathy-Squaretop.jpg"

export default function(props) {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            </div>
            <div className="right-column">
                <p>I am thrilled to be a student software developer. Using creativity daily to solve problems is like a dream job for me. As I learn new skills, I get more and more excited at the possibilities programming offers.

    I didn't always know I wanted to be a software engineer. I worked through college and was accepted to Medical School in Des Moines, IA. Graduated Podiatry school, and was accepted into a 36 month surgical residency in Tucson, AZ. Upon completion of my education, I joined a practice in Ranchester Wyoming. I knew quickly it would not be a long term position, so I started my own practice in Riverton, Wyoming. Where I was happy to help people for 7 years.

    Thus far in my life everything had gone according to plan, however, like many people, my first career (Podiatrist) hit a reef and sank. I had no idea what to do after my initial plan imploded, but I knew any problem in life can be solved with hard work! 

    I've never been too proud to perform honest labor, and so I went to work in an environmental laboratory doing clean up. It didn't pay well, but it kept food on the table. I call this "my lifeboat" job. 

    I worked my way up to a comfortable living in this company, and most likely would have stayed, but as a field technician in the gas field, when petroleum took a dive, I had to get out. 

    There is always a danger of falling in love with your lifeboat. Such a danger, that you may not want to leave the perceived safety even when it bumps into your next "dry land" of opportunity. 

    I've come  a long way in my career, and it's been bumpy, but I know the best is yet to come, and I'm not afraid to work for it!</p>
            </div>
        </div>
    );
}