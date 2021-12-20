import React ,{useState} from "react"
import "../styling/examSearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import Exams from "./Exams";
import OutsideClickHandler from 'react-outside-click-handler';

function ExamSearchBar({placeholder,data}){

    
    const[hidden,setHidden]=useState(false);

  

    const SearchExams=()=>{
        let filter=document.getElementById("myInput").value.toUpperCase();

        let ul=document.getElementById("myUL");
        let li=ul.getElementsByTagName("li");
        for(var i=0;i<li.length;i++){

            let a=li[i].getElementsByTagName('a')[0];
            let textValue=a.textContent|| a.innerHTML;
            if(textValue.toUpperCase().indexOf(filter)>-1 ){
                li[i].style.display="";

            }else{
                li[i].style.display="none";
            }

        }

    }

    

    
    return(
        <div className="exam_search">
            <div className="exam_search_input">
                <OutsideClickHandler onOutsideClick={()=>{
                    setHidden(false);
                }}>

                <input onClick={()=>setHidden(true)}  type="text"  id="myInput" placeholder={placeholder} onKeyUp={SearchExams} className="exam_input"/>
                 
               
            
            <div  className="exam_data_result">
                {hidden &&(
             <ul className="list" id="myUL">
                    <li><a href="#ias" target="_blank">IAS</a></li>
                    <li><a href="#clat" target="_blank">CLAT</a></li>
                    <li><a href="#cat" target="_blank">CAT</a></li>
                    <li><a href="#uceed" target="_blank">UCEED</a></li>
                    <li><a href="#nda" target="_blank">NDA</a></li>
                    <li><a href="#ca" target="_blank">CA</a></li>
                    <li><a href="ies" target="_blank">IES</a></li>
                    <li><a href="#nid" target="_blank">NID</a></li>
                    <li><a href="#nift" target="_blank">NIFT</a></li>
                    <li><a href="#gate" target="_blank">GATE</a></li>
                    <li><a href="#aims" target="_blank">AIIMS</a></li>
                    <li><a href="#bitsat" target="_blank">BITSAT</a></li>
                    <li><a href="#jipmer" target="_blank">JIPMER</a></li>
                    <li><a href="#manipal" target="_blank">MANIPAL</a></li>
                    <li><a href="#navy" target="_blank">NAVY</a></li>
                    <li><a href="#army" target="_blank">ARMY</a></li>
                    <li><a href="#aieed" target="_blank">AIEED</a></li>
                    <li><a href="#hsee" target="_blank">HSEE</a></li>
                    <li><a href="#jnu" target="_blank">JNU</a></li>
                    <li><a href="#hotel" target="_blank">HOTEL MANAGEMENT</a></li>
                    <li><a href="#ailet" target="_blank">AILET</a></li>
                    <li><a href="#kvpy" target="_blank">KVPY</a></li>
                    <li><a href="#nest" target="_blank">NEST</a></li>
                    <li><a href="#bhu" target="_blank">BHU</a></li>
                    <li><a href="#banasthali" target="_blank">BANASTHALI</a></li>
                    <li><a href="#jee" target="_blank">IIT</a></li>
                    <li><a href="#indian" target="_blank">IMUCET</a></li>
                    
                    
                </ul> 
                )}
                </div>
                 </OutsideClickHandler>
                 
                

                
            </div>
            <div className="icon">
            <div className="exam_search_icon"><SearchIcon/></div>
            </div>
            
        </div>

    );
}

export default ExamSearchBar;