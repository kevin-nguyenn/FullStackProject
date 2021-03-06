import React from "react";
import { Switch, Route } from "react-router-dom"

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import ShoeIndexContainer from './shoes/shoe_index_container'
import ShoeDetailContainer from './shoes/shoe_detail_container';
import ShoeSearchContainer from './shoes/shoe_search_container';
import FormContainer from './session_form/signup_form_container';
import HomeContainer from './home/home_container';
import ProfileContainer from './users/profile_container';
import Footer from './footer/footer';

const App = () => {
    
    return (
        <div>
            <main className="main-content-container">
                <header className="nav-container">
                    <NavBarContainer />
                </header>

                <Switch>
                    <AuthRoute exact path="/login" component={FormContainer} />
                    <AuthRoute exact path="/signup" component={FormContainer}/>
                    <Route exact path="/shoes" component={ShoeIndexContainer}/>
                    <Route path="/shoes/:shoeId" component={ShoeDetailContainer}/>
                    <Route path="/shoes/search" component={ShoeSearchContainer}/>
                    <Route path="/profile" component={ProfileContainer}/>
                    <Route exact path="/" component={HomeContainer}/>
                </Switch>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
};

export default App;