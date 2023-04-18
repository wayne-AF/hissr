import styles from './App.module.css';
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container'
import { Route,Switch } from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import PersonalCreateForm from './pages/personals/PersonalCreateForm';
import PersonalPage from './pages/personals/PersonalPage';
import PersonalsPage from './pages/personals/PersonalsPage';

function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || ""
  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              {/* How can I render both PostsPage and PersonalsPage here? */}
              <Route 
                exact 
                path="/" 
                render={() => 
                  <PostsPage message="No results found! Adjust the keyword?" />
                } 
              />
              <Route 
                exact 
                path="/feed" 
                render={() => 
                  // How can I render PostsPage and PersonalsPage here?
                  <PostsPage 
                    message="No results found! Adjust the keyword or try following someone." 
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                } 
              />
              <Route 
                exact 
                path="/personals" 
                render={() => 
                  <PersonalsPage 
                    message="No results found! Adjust the keyword?" 
                    filter={`owner__followed__owner__profile=${profile_id}&`}/>
                 } />
              <Route 
                exact 
                path="/liked" 
                render={() => 
                  <PersonalsPage 
                    message="No results found! Adjust the keyword or try liking a bolt." 
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
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
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />



              <Route
                render={() => (
                  <p>
                    <i className="fa-solid fa-face-sad-cry"></i> Page not found
                    <i className="fa-solid fa-face-sad-cry"></i>
                  </p>
                )}
              />
            </Switch>
          </Container>
        </div>
  );
}

export default App;