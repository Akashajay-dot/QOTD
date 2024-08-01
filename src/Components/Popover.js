import React, { useEffect } from 'react'
import "../Styles/Popover.css"
import { Link } from 'react-router-dom'
function Popover({popover,iscorrect,point}) {
  return (

    <div className={popover ?'popover' :'PopOver'}>
        {iscorrect && <h3>Correct Answer! 🌟 <br/>You've earned {point} points! 🏆</h3> }
        {!iscorrect && <h3>No worries! Wrong answer this time. <br />Better luck next round! 🤞 🏆</h3>}
        <div className="popBtns">
        <Link to={"/postQuestions"}> <button className='addQstnBtn'>Add   Questions</button></Link>
            <button className='prvQstnBtn'>Prev Question</button>
            
        </div>
   
    </div>
  )
}

export default Popover