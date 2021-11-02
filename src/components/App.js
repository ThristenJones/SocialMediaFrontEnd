import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "../WEB PAGES/Home";
import Bulletin from "../WEB PAGES/Bulletin";
import FriendsList from "../WEB PAGES/FriendsList";
import FAQ from "../WEB PAGES/FAQ";
import Profile from "../WEB PAGES/Profile";
import SignUp from "../WEB PAGES/SignUp";



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = { Home } />
        <Route path = '/bulletin' component = { Bulletin } />
        <Route path = '/FriendsList' component = { FriendsList } />
        <Route path = '/faq' component = { FAQ } />
        <Route path = '/profile' component = { Profile } />
        <Route path = '/signup' component = { SignUp } />
      </Switch>

      
      {/* <SignIn />
      <Register />
      <FriendsList />
      <CreateBulletin />
      <Bulletin />
      <CompleteFriendsist />
      <PendingFriendsList />
      <SiteRules />
      <Contact />
      <ProfilePic />
      <Bio />
      <LogOut />
      <UserPostings /> */}


   </div>
  )
}

export default App;
