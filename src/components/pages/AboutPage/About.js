import react from 'react';
import './About.css';
import history_text from './history_text.js';
import purpose_text from './purpose_text.js';
import leadership_text from './leadership_text.js';


function AboutPage(){

return(
<>
 

 <aside class = "about-sidebar">
 <div class ="about-side">
 <div class ="about-nav" ><a href = "#fake">History</a></div>
 <div class ="about-nav" ><a href = "#about_nav_purpose">Purpose</a></div>
 <div class ="about-nav" ><a href = "#about_nav_leadership">Leadership</a></div>
 </div>
 </aside>
 <div class ="about-text">
     <div class ="about-container" id = "about_nav_history"><h1 id ="type1">History</h1>{history_text}</div>
     <div class ="about-container" id = "about_nav_purpose"><h1 id ="type2">Purpose</h1>{purpose_text}</div>
     <div class ="about-container" id = "about_nav_leadership"><h1 id ="type3">Leadership</h1>{leadership_text}</div>
 </div>
</>
)}

export default AboutPage;