import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PersonalCreateForm from "./pages/personals/PersonalCreateForm";
import PersonalPage from "./pages/personals/PersonalPage";
import PersonalsPage from "./pages/personals/PersonalsPage";
import PersonalEditForm from "./pages/personals/PersonalEditForm";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              
              <Route 
                exact 
                path="/" 
                render={() => 
                  <PostsPage message="No results found! Adjust the keyword?" />
                } 
              />
              {/* Feed route */}
              <Route 
                exact 
                path="/feed" 
                render={() => 
                  <PostsPage 
                    message="No results found! Adjust the keyword or try following someone." 
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                } 
              />
              {/* Personals/bolts page route */}
              <Route 
                exact 
                path="/personals" 
                render={() => 
                  <PersonalsPage 
                    message="No results found! Adjust the keyword?" 
                  />
                 } />
                 {/* Liked bolts route */}
              <Route 
                exact 
                path="/liked" 
                render={() => 
                  <PersonalsPage 
                    message="No results found! Adjust the keyword or try liking a bolt." 
                    filter={`likes__owner__profile=${profile_id}&ordering=-personals__created_at&`}
                  />
                } 
              />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/personals/create" render={() => <PersonalCreateForm />} />
              <Route exact path="/personals/:id" render={() => <PersonalPage />} />
              <Route exact path="/personals/:id/edit" render={() => <PersonalEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route render={() => <NotFound />}/>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Container>
        </div>
  );
}

export default App;