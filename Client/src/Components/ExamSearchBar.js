import React from "react"
import "../styling/examSearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

function ExamSearchBar({placeholder,data}){

    const SearchExams=()=>{
        let filter=document.getElementById("myInput").value.toUpperCase();

        let ul=document.getElementById("myUL");
        let li=ul.getElementsByTagName("li");
        for(var i=0;i<li.length;i++){

            let a=li[i].getElementsByTagName('a')[0];
            let textValue=a.textContent|| a.innerHTML;
            if(textValue.toUpperCase().indexOf(filter)>-1){
                li[i].style.display="";

            }else{
                li[i].style.display="none";
            }

        }

    }

    
    return(
        <div className="exam_search">
            <div className="exam_search_input">
                <input type="text"  id="myInput" placeholder={placeholder} onKeyUp={SearchExams} className="exam_input"/>
                <div className="exam_search_icon"><SearchIcon/></div>
            </div>
            <div className="exam_data_result">
                <ul id="myUL">
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test" target="_blank">IAS</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">CLAT</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">CAT</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">UCEED</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">NDA</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">IIT</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">CA</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">IES</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">NID</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">NIFT</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">GATE</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">AIIMS</a></li>
                    
                    
                </ul>
                
            </div>
        </div>

    );
}

export default ExamSearchBar;