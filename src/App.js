import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import LandingPage from './Components/LandingPage';
import PostQuestions from './Components/PostQuestions';
import { toast, ToastContainer } from 'react-toastify';
import { GlobalStateContext } from './Context/GlobalStateContext';
import axios from 'axios';
import Loading from './Components/Loading';

function App() {
  const { state, setLogedin ,setId,setCategory,setUserName, setLoading} = useContext(GlobalStateContext);
  useEffect(() => {
    const credential = localStorage.getItem('token');
    const notify = () => toast.error("Error login");

    const validateToken = async () => {
      if (credential ) {
        try {
          const res = await axios.post('http://localhost:57101/api/auth/validate-token', {
            credential: credential
          });

          if (res.data.Isvalid) {
            setId(res.data.UserId);
            setUserName(res.data.Payload.name);

            setLogedin(true);
            setCategory(res.data.category);
            setLoading(true);
            
          } else {
           
          }
        } catch (error) {
          console.error('An error occurred:', error);
          
        }
      }
      else{
        setLogedin(false);
        

      }
    };

    validateToken();
  }, []);


  return (
    <div className="App">
      <Router >
        <Header/>
        {state.loading &&<Loading/> }
        <Routes>
          <Route path='/' element={state.isLogedin ? <LandingPage />: <LoginPage/> }/> 
          {state.isLogedin &&
          (  <Route path='/postQuestions' element={<PostQuestions/>}/>
          
         
          )
          }
        </Routes>
     </Router>
     <ToastContainer />
    </div>
  );
}

export default App;
