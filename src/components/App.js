import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";


function App() {
  return (
    <div>
      {/* <Switch>
        <Route path = '/' exact component = { Home } />
        <Route path = '/bulletin' component = { Bulletin } />
        <Route path = '/freindslist' component = { FriendList } />
        <Route path = '/faq' component = { FAQ } />
        <Route path = '/profile' component = { Profile } />
        <Route path = '/signup' component = { SignUp } />
      </Switch> */}

      <Navbar />
      {/* <SignIn />
      <Register />
      <FriendList />
      <CreateBulletin />
      <Bulletin />
      <CompleteFriendList />
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
