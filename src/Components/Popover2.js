import React, { useEffect } from 'react'
import "../Styles/Popover.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Popover2({popover}) {
  const navigate = useNavigate();

    const handleRefresh = () => {
        navigate(0); // Refresh the current route
      };
  return (

    <div className="popover">
        <h3>Question Submitted 🌟 <br/>Want to add More 🏆</h3> 
        <div className="popBtns">
        <button className='addQstnBtn' onClick={handleRefresh}>Add   Questions</button>
            <button className='prvQstnBtn'>Prev Question</button>
            
        </div>
   
    </div>
  )
}

export default Popover2