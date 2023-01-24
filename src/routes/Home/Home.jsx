import React from 'react';
import './Home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import MainProfile from '../../components/Main_profile/Main_profile';
import { Route, Routes } from 'react-router-dom';
import Repostories from '../../components/Repositories/Repostories'
import MainHeader from '../../components/MainHeader/MainHeader';
import Followers from '../../components/Followers/Followers';
import Following from '../../components/Following/Following';

const Home = () => {
  // const [user, setUser] = useState();
  // const [repos, setRepos] = useState([]);

  // const userNameParams = match.user.userName

  // useEffect(() => {
  //   fetchUser()
  //   fetchRepos()
  // }, [])

  // async function fetchUser() {
  //   const { data } = await getUserData(userNameParams)
  //   setUser(data)
  // }
  // async function fetchRepos() {
  //   const { data } = await getUserData(userNameParams)
  //   setRepos(data)
  // }

  return (
    <>
        <Navbar />
        <MainHeader/>
        <Routes>
          <Route path='/Repostories' element={<Repostories />} />
          <Route path='/' element={<Main />}/>
          <Route path='/Followers' element={<Followers/>}/>
          <Route path='/Following' element={<Following/>}/>
          
        </Routes>
        <MainProfile />
        <Footer/>
    </>



  )
}

export default Home