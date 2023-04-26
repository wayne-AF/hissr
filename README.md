# Hissr
![Mockup image](documentation/design/mock-up.png)

The live project can be found [here](https://hissr.herokuapp.com/).
## Table of Contents
1. [About](#about)
2. [Project Goals](#project-goals)
3. [User Stories](#user-stories)
4. [Design](#design)
    - [Colours](#colours)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
5. [Front-end](#front-end)
6. [Back-end API](#back-end-api)
5. [Features](#features)
6. [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries, Frameworks & Dependencies](#libraries-frameworks-&-dependencies)
    - [Tools & Software](#tools-&-software)
7. [Validation](#validation)
8. [Testing](#testing)
    - [Testing User Stories](#testing-user-stories)
9. Bugs
10. [Deployment](#deployment)
12. [Notes](#notes)

## About
Hissr is a content-sharing and social platform for cats around the world to connect and interact with each other. Users can create and comment on posts, create and like short-form posts, follow and unfollow users to curate their content feed, and edit their profiles to present themselves how they wish to their community.

## Project Goals
The goal for this project was to create a content-sharing platform for users from around the world to interact by creating posts, commenting on posts, liking content, and following other users. The intended tone is light and informal.

Key aspects:
- bright and cheerful design
- simple and intuitive navigation
- straightforward user authentication
- CRUD functionality for posts, comments, and bolts
- user interactions via comments and likes and follows
- data filtering by keywords, profiles followed, and content liked
- site responsiveness

I used an Agile methodology for planning this project, implemented using a Kanban board in Github Project with linked issues.  
View the Kanban board [here](https://github.com/users/wayne-AF/projects/9).
(Please see the [Notes](#notes) section concerning the numbering of User Stories on the Kanban board.)

## User Stories

### First sprint
#### Navigation
1. As a user, I want the ability to view and understand the site before I decide to create an account.
2. As a user, I want the ability to view the navbar from every page so I can easily navigate around the site.
3. As a logged-out user, I want the ability to easily sign in or sign up from wherever I am on the site.
#### Authentication
4. As a user, I want the ability to sign up for an account to use all the site’s features.
5. As a user, I want the ability to sign in with my login credentials.
6. As a user, I want the ability to stay signed in until I choose to log out.
7. As a user, I want the ability to quickly see if I am signed in or not.
### Second sprint
#### Posts
8. As a user, I want the ability to create a post in order to start a conversation with my community.
9. As a user, I want the ability to add a location to my post so that others can easily find posts from users in specific areas. 
10. As a user, I want the ability to edit my post to correct for errors.
11. As a user, I want the ability to delete my post in case I have changed my mind.
12. As a user, I want the ability to see all users’ posts with the most recent first, so that I can keep up-to-date with my community.
13. As a user, I want the ability to keep scrolling through content so I don’t have to move to a different page.
14. As a user, I want the ability to see a page with a single post and its comments.
#### Comments
15. As a user, I want the ability to make a comment on a post to be part of the conversation.
16. As a user, I want the ability to edit a comment I have made to correct for errors.
17. As a user, I want the ability to delete a comment I have made in case I have changed my mind.
18. As a user, I want the ability to search for posts based on username, post title, post content, or post location.
### Third sprint
#### Bolts
19. As a user, I want the ability to create a short post, a bolt, to express an idea or thought without the intention of starting a conversation.
20. As a user, I want the ability to add a category to my bolt, so that others can search for it based on this criterion.
21. As a user, I want the ability to edit my bolt to correct for errors.
22. As a user, I want the ability to delete my bolt in case I have changed my mind.
23. As a user, I want the ability to see all users’ bolts on their own page with the most recent first, so I can keep up-to-date with my community.
24. As a user, I want the ability to search for bolts based on username, bolt title, bolt content, or bolt category.
#### Likes
25. As a user, I want the ability to like a bolt to express my appreciation for its content.
26. As a user, I want the ability to unlike a bolt I have liked in case I have changed my mind.
27. As a user, I want the ability to see all the bolts I have liked on a single page to be able to quickly access the funny and interesting ones.
### Fourth sprint
#### Profile
28. As a user, I want the ability to upload a profile pictures so users can easily identify me.
29. As a user, I want the ability to edit the content of my profile so others can know more about me.
30. As a user, I want the ability to change my username.
31. As a user, I want the ability to change my password to maintain the security of my account.
#### Other profiles
32. As a user, I want the ability to view other users’ profiles in order to know more about them.
33. As a user, I want the ability to see the number of posts, bolts, followers, and followed on a user’s profile so that I can learn more about them.
34. As a user, I want the ability to see a user’s posts on their profile.
#### Follow
35. As a user, I want the ability to follow and unfollow a user to curate whose posts appear in my feed.
36. As a user, I want the ability to see the most followed profiles.
#### Other
37. As a user, I want the ability to receive feedback messages to tell me if my attempted action has been successful, e.g. updating a post or deleting a comment. 




## Design
### Colours
Mostly neutral colours were chosen to make the site feel relaxing, with a bright, playful accent colour to highlight links, texts, and icons.
<details><summary>Colour palette</summary>
<img src="documentation/design/colour_palette.png">
</details>

### Imagery
The background contains imagery commonly associated with cats: paw prints, fish, balls of yarn, and bells. It is fairly muted so as not to draw attention from the site's content but provides a playful background, adding to the overall light and informal atmosphere of the site. 
<details><summary>Background</summary>
<img src="documentation/design/background.png">
</details>

The site logo is a simple cat's face purchased from Vectorstock which I edited for clarity. It's the same orange as the site's accent colour.
<details><summary>Hissr logo</summary>
<img src="documentation/design/cat-logo.png">
</details>

The default profile photo was also purchased from Vectorstock and in the same orange as the site's accent colour, so even if a user does not upload a profile photo, the default picture is appealing enough to not detract from the appearance of any page where it appears.
<details><summary>Default picture</summary>
<img src="documentation/design/default_profile_pic_2.png">
</details>
The No-Results cat image was also purchased from Vectorstock and used when a user's search is unsuccessful. 
<details><summary>No results cat</summary>
<img src="documentation/design/no-results.png">
</details>

### Fonts
The main font across the site is Comfortaa, which has a rounded, playful look to it, while also being easy to read. The font colour used is teal (#056571) to match better with the muted greens of the background while still being easy to read against the neutral backgrounds.
<details><summary>Text font</summary>
<img src="documentation/design/text_font.png">
</details>
The logo font is Yeseva One, a more embellished font than the rest of the text. It's rendered in orange to match the logo and the rest of the navbar text. It disappears on smaller screens. 
<details><summary>Logo font</summary>
<img src="documentation/design/logo_font.png">
</details>

### Wireframes

<details><summary>Sign up page</summary>
<img src="documentation/design/wireframes/sign_up_wireframe.png">
</details>
<details><summary>Sign in page</summary>
<img src="documentation/design/wireframes/sign_in_page.png">
</details>
<details><summary>Home page</summary>
<img src="documentation/design/wireframes/homepage_wireframe.png">
</details>
<details><summary>Post page</summary>
<img src="documentation/design/wireframes/postpage_wireframe.png">
</details>
<details><summary>Create post</summary>
<img src="documentation/design/wireframes/postcreate_wireframe.png">
</details>
<details><summary>Edit post</summary>
<img src="documentation/design/wireframes/postedit_wireframe.png">
</details>
<details><summary>Feed</summary>
<img src="documentation/design/wireframes/feed_wireframe.png">
</details>
<details><summary>Liked</summary>
<img src="documentation/design/wireframes/liked_wireframe.png">
</details>
<details><summary>Bolts page</summary>
<img src="documentation/design/wireframes/bolt_wireframe.png">
</details>
<details><summary>Bolt page</summary>
<img src="documentation/design/wireframes/boltpage_wireframe.png">
</details>
<details><summary>Create bolt</summary>
<img src="documentation/design/wireframes/personalcreate_wireframe.png">
</details>
<details><summary>Edit bolt</summary>
<img src="documentation/design/wireframes/personaledit_wireframe.png">
</details>
<details><summary>Profile</summary>
<img src="documentation/design/wireframes/profilepage_wireframe.png">
</details>
<details><summary>Edit profile</summary>
<img src="documentation/design/wireframes/profileedit_wireframe.png">
</details>
<details><summary>Change username</summary>
<img src="documentation/design/wireframes/usernameedit_wireframe.png">
</details>
<details><summary>Change password</summary>
<img src="documentation/design/wireframes/passwordedit_wireframe.png">
</details>

## Front-end
### React
React is an open-source front-end Javascript library for developers to easily create fast user interfaces for websites and applications based on individual and reusable components.

React was used for this project due to its:
- flexibility: React's modular structure makes it flexible and easier to maintain than other front-end frameworks
- reusability of components: repetition of code is kept to a minimum
- speed: React allows for the creation of applications with greater loading speeds, enhancing user experience
- React-Bootstrap: each Bootstrap component has been built as a React component, which makes them easy to implement and style

### Reused Components
- `<Asset />`: multipurpose component which displays different content depending on the props passed to it.
    - loading spinner when content is being loaded
    - image to indicate no results were found
    - message to indicate no results were found
    - User stories: 18, 24
- `<Avatar />`: component used to render profile images of different sizes and source images depending on the passed props.
    - User stories: 7, 28, 32, 36
- `<MoreDropdown />`: renders the dropdown menu for users to edit and delete their posts and bolts, edit their profile details, and change their username and password
    - User stories: 10, 11, 16, 17, 21, 22, 29, 30, 31
- `<NavBar />`: component that displays different content depending on whether the user is logged in or not. Logged in users see Create, Home, Feed, Liked, Bolts, Profile, and Sign out icons. Logged out users see Home, Sign in, and Sign up icons. The component displays on every page across the app.
    - User stories: 2, 3, 7
- `<PopularProfiles />`: component which displays the four more followed profiles in the app. Displayed are the user's avatar, user's name, and a follow/unfollow button. The button is only visible on larger screens.
    - User stories: 36


## Back-end API
### Django Rest Framework
The back-end API for this project was built using the Django Rest Framework. The API's repository can be found [here](https://github.com/wayne-AF/hissr-drf-api).

## Features
### Homepage
- Displays the navbar, latest posts, most followed profiles
- All users can see all the most recent posts displayed here
- I did not feel that a dedicated landing page with site explanation was necessary. Internet users are very familiar with content-sharing and social-interaction sites like Twitter and Facebook, and because each component is clearly delineated, it is obvious to new users what kind of site Hissr is and who it is for.
- Logged-out users cannot see all pages of the site but they can view the most recent posts and get an idea of the tone of the site and if they'd like to sign up. The sign-in and sign-up links are also clearly visible in the navbar.
- Users can see how many comments each post has
- User stories: 1, 2, 3, 12
<details><summary>Homepage large screen</summary>
<img src="documentation/features/homepage_large_screen.png">
</details>
<details><summary>Homepage small screen</summary>
<img src="documentation/features/homepage_small_screen.png">
</details>

### Navbar
- Visible across all pages
- Contains the logo, site name, and tagline
- Displays the sign-in and sign-up links for logged-out users
- Displays the create, homepage, feed, liked, bolts, profile, and sign-out links to logged-in users
- Responsive and collapses to a toggler on smaller screens
- When collapsed on smaller screens, the create icon remains visible, enforcing the idea that the site is for content sharing and engagement
- When logged in, the navbar displays all the available pages for the user, as well as displaying the user's profile photo (if uploaded), letting them see at a glance whether they are logged in or not
- User stories: 2, 3, 7
<details><summary>Navbar large screen</summary>
<img src="documentation/features/navbar_large.png">
</details>
<details><summary>Navbar small screen</summary>
<img src="documentation/features/navbar_small.png">
</details>
<details><summary>Navbar dropdown</summary>
<img src="documentation/features/navbar_dropdown.png">
</details>

### Sign up form
- Allows new users to create an account with a username and password
- Contains a welcome message and a tagline further explaining to the user that the site is for cats who wish to connect with cats all over the world
- Contains a link to the sign in page for users who already have an account
- User stories: 4
<details><summary>Sign up form</summary>
<img src="documentation/features/sign_up_form.png">
</details>

### Sign in form
- Allows users with an existing account to log in
- Contains a welcome back message for returning users
- Contains a link to sign up for users who do not already have an account
- Brings the user to the homepage once log in is completed
- User stories: 5
<details><summary>Sign in form</summary>
<img src="documentation/features/sign_in_form.png">
</details>

### Post create form
- Contains title, city, country, and content fields
- City and country fields are mandatory in order to help promote connecting with users in your community as well as all over the world and to make it easier for users to search for content by location
- The country names are listed as full names, but displayed as two-letter country codes in the published post
- The tagline encourages the user to start a conversation, reminding them about creating a dialogue and engaging with other users
- User stories: 8, 9
<details><summary>Post create form</summary>
<img src="documentation/features/post_create.png">
</details>

### Post edit form
- Is prepopulated with the information from the original post which the user can edit as they wish
- The tagline reminds the user that any edits they make might affect any conversation taking place in the comments on a post
- User stories: 10
<details><summary>Post edit form</summary>
<img src="documentation/features/post_edit.png">
</details>

### Post detail page
- A page with a single post and all its details
- Also displays all of the post's comments
- This page allows the owner of the post to access its' edit and delete options from a dropdown menu in the upper-right corner of the post
- Users can create a comment on a post on this page
- User stories: 14, 15, 16, 17
<details><summary>Post detail page</summary>
<img src="documentation/features/post_1.png">
</details>
<details><summary>Post edit menu</summary>
<img src="documentation/features/post_2.png">
</details>

### Comments
- Users can comment on any post by navigating to the post's detail page
- Elapsed time since the comment's creation is displayed in each comment
- Users can update or delete their comments via a dropdown menu
- Users can see the owner of each comment from the avatar and username on each comment
- User stories: 15, 16, 17
<details><summary>Comment</summary>
<img src="documentation/features/comment.png">
</details>
<details><summary>Comment edit menu</summary>
<img src="documentation/features/comment_edit_menu.png">
</details>
<details><summary>Comment edit</summary>
<img src="documentation/features/comment_edit.png">
</details>


### Bolt create form
- Users can create a short-form post with the intention of just expressing a thought or idea or recommendation without engaging in conversation
- Instead of location, users choose a category from a list of cat-related topics
- The tagline asks the question "something on your mind?" suggesting the idea of putting out a quick thought or idea
- User stories: 19, 20
<details><summary>Bolt create</summary>
<img src="documentation/features/bolt_create.png">
</details>

### Bolt edit form
- Is prepopulated with the information from the original bolt which the user can edit as they wish
- User stories: 21
<details><summary>Bolt edit</summary>
<img src="documentation/features/bolt_edit.png">
</details>

### Bolt detail page
- A single bolt page where the bolt owner can access the edit and delete options
- User stories: 21, 22
<details><summary>Bolt</summary>
<img src="documentation/features/bolt.png">
</details>
<details><summary>Bolt edit menu</summary>
<img src="documentation/features/bolt_dropdown.png">
</details>

### Bolts page
- Lists all the recently created bolts
- User stories: 23
<details><summary>Bolt large screen</summary>
<img src="documentation/features/bolt_large_screen.png">
</details>
<details><summary>Bolt small screen</summary>
<img src="documentation/features/bolt_small_screen.png">
</details>



### Likes
- A user can like a bolt in order to express their appreciation for its content
- A user can also unlike a bolt if they change their mind
- Users cannot like their own bolts
- Likes and unlikes can be performed on the bolts page and the bolt detail page
- A paw icon from FontAwesome is used in place of a heart icon for likes
- User stories: 25, 26
<details><summary>Liking a bolt</summary>
<img src="documentation/features/like_bolt.png">
</details>
<details><summary>Liking own bolt</summary>
<img src="documentation/features/like_own_bolt.png">
</details>

### Liked page
- A page displaying all the bolts a user has liked
- User stories: 27
<details><summary>Liked page large screen</summary>
<img src="documentation/features/liked_page_large.png">
</details>
<details><summary>Liked page small screen</summary>
<img src="documentation/features/liked_page_small.png">
</details>

### Feed page
- A page displaying all the posts from profiles that the user is following
- User stories: 35
<details><summary></summary>
<img src="documentation/features/.png">
</details>

### Profile page
- Displays the profile owner's name, their avatar, their statistics of content published and how many people they are following and being followed by
- It also displays the user's location and an about section, if provided by the profile owner
- Contains a dropdown menu for the user to edit the profile, change the username, and change their password
- Displays a list of the profile owner's recent posts
- Contains a follow/unfollow on other profiles
- User stories: 32, 33, 34
<details><summary>Profile</summary>
<img src="documentation/features/profile_1.png">
</details>
<details><summary>Profile edit menu</summary>
<img src="documentation/features/profile_2.png">
</details>

### Profile edit form
- Allows a user to upload a profile picture, to enter their location, and to write some personal text in the about section
- User stories: 28, 29
<details><summary>Profile edit form</summary>
<img src="documentation/features/profile_edit.png">
</details>

### Username edit form
- Allows a user to update their username
- User stories: 30
<details><summary>Username edit form</summary>
<img src="documentation/features/username_edit.png">
</details>

### Password change form
- Allows a user to update their login password
- User stories: 31
<details><summary>Password change form</summary>
<img src="documentation/features/password_edit.png">
</details>

### Popular profiles
- Displays the four most-followed profiles from the site
- On larger screens it is on the right side of the screen, and on smaller screens it is across the top 
- On larger screens it contains follow/unfollow buttons
- Users can click on the profiles avatars or names to navigate to their profile pages
- User stories: 36
<details><summary>Popular profiles large screen</summary>
<img src="documentation/features/popularprofiles_1.png">
</details>
<details><summary>Popular profiles small screen</summary>
<img src="documentation/features/popularprofiles_2.png">
</details>

### Follow/unfollow
- Users can follow profiles so that any posts from those profiles will appear in the user's feed page
- Follow/unfollow buttons appear in the most followed profiles component on larger screen and on profile pages
- User stories: 35
<details><summary>Profile follow</summary>
<img src="documentation/features/profile_follow.png">
</details>
<details><summary>Popular profiles follow</summary>
<img src="documentation/features/popularprofiles_1.png">
</details>

### Search bar
- Users can filter the page's content based on keywords, e.g. username, location, title, etc.
- The search bar is available on the home, feed, liked, and bolts pages
- If no results are found, a message with accompanying image is displayed
- User stories: 18, 24
<details><summary>Search bar</summary>
<img src="documentation/features/searchbar_1.png">
</details>
<details><summary>Search bar no results</summary>
<img src="documentation/features/searchbar_2.png">
</details>

### Infinite scroll
- Allows the user to keep scrolling through content without having to change to a different page, improving user experience
- Used for posts, bolts, comments, bolts, and liked pages
- User stories: 13
### Feedback messages
- Provides the user with feedback messages telling them their attempted action was successful or failed
- Provides confirmation when the user creates, edits or deletes a post, bolt, comment, profile, username, and password 
- Appears in the upper-right corner of the screen and disappears after five seconds
- User stories: 37
<details><summary>Feedback message</summary>
<img src="documentation/features/feedback_message.png">
</details>


### Future Features


## Technologies Used
### Languages
- HTML5
- CSS3
- JavaScript
### Libraries, Frameworks & Dependencies
- [Axios](https://axios-http.com/docs/intro) - Used to send API requests to the Django Rest Framework back-end API to send, retrieve, and update data
- [JWT](https://jwt.io/) - Used to prevent unauthenticated users from making extra network requests to refresh their access tokens
- [Popper](https://popper.js.org/) - Used to ensure the three-dots dropdown menu was correctly positioned across all browser windows
- [React](https://17.reactjs.org/) - Used for the creation of this project
- [React-Bootstrap](https://react-bootstrap-v4.netlify.app/) - Used for app styling and responsiveness
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Used to load content automatically as the user scrolls down in order to prevent the user from having to navigate to another page to continue viewing content
- [React-Toastify](https://www.npmjs.com/package/react-toastify) - Used for notification messages to inform user of successful content creation, update, and deletion
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)

### Tools & Software
- [Am I Responsive](https://ui.dev/amiresponsive) - Used to create the mock-up image for the Readme
- [Balsamiq](https://balsamiq.com) - Used to create wireframes
- [ColorHunt](https://colorhunt.co/) - Used to choose and create a colour palette
- [Font Awesome](https://fontawesome.com/) - Used for icons across the site
- [Git](https://git-scm.com/) - Used for version control by committing to Git and pushing to GitHub
- [GitHub](https://github.com/) - Used to store the code pushed from Git
- [Gitpod](https://gitpod.io) - Used to host virtual workspace
- [Google Fonts](https://fonts.google.com/) - Used for the site's fonts
- [Heroku](https://heroku.com/) - Used to deploy and run the application
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - Used for CSS validation
- [MiniPaint](https://viliusle.github.io/miniPaint/) - Used for image editing to create the background and the placeholder images
- [SimpleImageResizer](https://www.simpleimageresizer.com/) - Used for image resizing for screenshots, background, site logo, and No-Results cat image
- [VectorStock](https://www.vectorstock.com/) - Used as a source for the background, the site's logo, the default profile picture, and the No-Results cat image
- [W3C](https://validator.w3.org/) - Used for HTML validation




## Validation
### HTML
W3C Markup validation was used to validate the HTML of the site. Results screenshots are provided below.
<details><summary>Home page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Sign up page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Sign in page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Post create page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Post edit page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Post detail page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Feed page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Liked page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Bolts page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Bolt create page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Bolt edit page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Bolt detail page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Profile page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Profile edit page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Username edit page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>Password edit page</summary>
<img src="documentation/validation/html/.png">
</details>
<details><summary>404 error page</summary>
<img src="documentation/validation/html/.png">
</details>



## Testing
### Testing User Stories
1. As a user, I want the ability to view and understand the site before I decide to create an account.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

2. As a user, I want the ability to view the navbar from every page so I can easily navigate around the site.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

3. As a logged-out user, I want the ability to easily sign in or sign up from wherever I am on the site.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

4. As a user, I want the ability to sign up for an account to use all the site’s features.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

5. As a user, I want the ability to sign in with my login credentials.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

6. As a user, I want the ability to stay signed in until I choose to log out.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

7. As a user, I want the ability to quickly see if I am signed in or not.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

8. As a user, I want the ability to create a post in order to start a conversation with my community.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

9. As a user, I want the ability to add a location to my post so that others can easily find posts from users in specific areas.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

10. As a user, I want the ability to edit my post to correct for errors.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

11. As a user, I want the ability to delete my post in case I have changed my mind.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

12. As a user, I want the ability to see all users’ posts with the most recent first, so that I can keep up-to-date with my community.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

13. As a user, I want the ability to keep scrolling through content so I don’t have to move to a different page.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

14. As a user, I want the ability to see a page with a single post and its comments.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

15. As a user, I want the ability to make a comment on a post to be part of the conversation.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

16. As a user, I want the ability to edit a comment I have made to correct for errors.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

17. As a user, I want the ability to delete a comment I have made in case I have changed my mind.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

18. As a user, I want the ability to search for posts based on username, post title, post content, or post location.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

19. As a user, I want the ability to create a short post, a bolt, to express an idea or thought without the intention of starting a conversation.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

20. As a user, I want the ability to add a category to my bolt, so that others can search for it based on this criterion.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

21. As a user, I want the ability to edit my bolt to correct for errors.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

22. As a user, I want the ability to delete my bolt in case I have changed my mind.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

23. As a user, I want the ability to see all users’ bolts on their own page with the most recent first, so I can keep up-to-date with my community.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

24. As a user, I want the ability to search for bolts based on username, bolt title, bolt content, or bolt category.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

25. As a user, I want the ability to like a bolt to express my appreciation for its content.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

26. As a user, I want the ability to unlike a bolt I have liked in case I have changed my mind.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

27. As a user, I want the ability to see all the bolts I have liked on a single page to be able to quickly access the funny and interesting ones.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

28. As a user, I want the ability to upload a profile pictures so users can easily identify me.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

29. As a user, I want the ability to edit the content of my profile so others can know more about me.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

30. As a user, I want the ability to change my username.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

31. As a user, I want the ability to change my password to maintain the security of my account.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

32. As a user, I want the ability to view other users’ profiles in order to know more about them.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

33. As a user, I want the ability to see the number of posts, bolts, followers, and followed on a user’s profile so that I can learn more about them.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

34. As a user, I want the ability to see a user’s posts on their profile.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

35. As a user, I want the ability to follow and unfollow a user so that specific users’ posts will appear in my feed.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

36. As a user, I want the ability to see the most followed profiles.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

37. As a user, I want the ability to receive feedback messages to tell me if my attempted action has been successful, e.g. updating a post or deleting a comment.

**Action** | **Expectation** | **Result**

<details><summary></summary>
<img src="documentation/testing_user_stories/.png">
</details>

## Deployment


## Notes
### Kanban board numbering of user stories
Upon starting this project, I used a Kanban board for user stories and task organisation. At a later point in the project, I was attempting to map user stories to sprints, and through my inexperience with Issues in Github, I mistakenly deleted them, believing that I could reset the numbering. Issues does not allow for renumbering, so issues on the Kanban board now start from #34 instead of #1. 


