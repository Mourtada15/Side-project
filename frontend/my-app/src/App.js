import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import EditMeme from './components/EditMeme';
import CreateMeme from './components/CreateMeme';
import Memes from './components/Memes';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NotFoundPage from './components/NotFound';
const App = () => {
  const [memes, setMemes] = useState(null)

  useEffect(() => {
    const fetchMemes = async () => { 
      try {
        const response = await fetch('/memes')
        const json = await response.json()

        if (response.ok) {
          // console.log('Fetched memes:', json);
          setMemes(json.memes)
        }
      } catch (error) {
        console.error('Error fetching memes', error.message)
      }
    }
    fetchMemes()
  }, [])

  // useEffect(() => {
  //   const fetchMemes = async () => {
  //     const response = await axios.get("http://localhost:4000/memes/", {
        
  //     });
  //     console.log("hayde el response", response.data);
  //     setMemes(response.data.data);
  //   };
   
  //     fetchMemes();
    
  // }, []);




  return (
    <Router>
      <Routes>
        <Route path="/Home" element={
          <>
            <Header />
            <Memes memes={memes}/>
            <Footer />
          </>
        } />
        <Route path="/EditMeme/:id" element={
          <>
            <Header />
            <EditMeme memes={memes}/>
            <Footer />
          </>
        } />
        <Route path="/CreateMeme" element={
          <>
            <Header />
            <CreateMeme />
            <Footer />
          </>
        } />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

