import React, { forwardRef, useEffect, useState } from 'react'
import "../Styles/LeaderBoard.css";
import axios from 'axios';

const UserList = forwardRef(({ id ,index}, ref) => {
    const [name , setname]=useState('');
    const [points , setPoints]=useState('');
    const [badge , setBadge]=useState('');

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


    useEffect(()=>{

        try{
        const fetchUserdetails =async ()=>{
                // http://localhost:57101/api/user/5
                const response = await axios.get(`${apiBaseUrl}/api/user/${id}`);
                // return(response);
                setname(response.data.User.Name)
                setPoints(response.data.User.Points)
                setBadge(response.data.ReputationName);

                // console.log(response)

            }
            fetchUserdetails();
        }
            catch{
                console.log("error");
            }
    },[])

    return (
      <div className='UserList' id={id} ref={ref}><div className="userListleft">
        <p className='userRank'>{index+1}</p>
        <h6>{name}</h6>
        <div className="rankTittle">
<p className='userBadge'>{badge}</p>
        

</div>
</div>

<h5>{points}</h5>



      </div>
    );
  });

export default UserList 