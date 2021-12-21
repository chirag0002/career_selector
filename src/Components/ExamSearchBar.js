import React ,{useState} from "react"
import "../styling/examSearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
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
                    <li><a href="#ias" >IAS</a></li>
                    <li><a href="#clat" >CLAT</a></li>
                    <li><a href="#cat" >CAT</a></li>
                    <li><a href="#uceed" >UCEED</a></li>
                    <li><a href="#nda" >NDA</a></li>
                    <li><a href="#ca" >CA</a></li>
                    <li><a href="ies" >IES</a></li>
                    <li><a href="#nid" >NID</a></li>
                    <li><a href="#nift" >NIFT</a></li>
                    <li><a href="#gate" >GATE</a></li>
                    <li><a href="#aims" >AIIMS</a></li>
                    <li><a href="#bitsat" >BITSAT</a></li>
                    <li><a href="#jipmer" >JIPMER</a></li>
                    <li><a href="#manipal" >MANIPAL</a></li>
                    <li><a href="#navy" >NAVY</a></li>
                    <li><a href="#army" >ARMY</a></li>
                    <li><a href="#aieed" >AIEED</a></li>
                    <li><a href="#hsee" >HSEE</a></li>
                    <li><a href="#jnu" >JNU</a></li>
                    <li><a href="#hotel" >HOTEL MANAGEMENT</a></li>
                    <li><a href="#ailet" >AILET</a></li>
                    <li><a href="#kvpy" >KVPY</a></li>
                    <li><a href="#nest" >NEST</a></li>
                    <li><a href="#bhu" >BHU</a></li>
                    <li><a href="#banasthali" >BANASTHALI</a></li>
                    <li><a href="#jee" >IIT</a></li>
                    <li><a href="#indian" >IMUCET</a></li>
                    
                    
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