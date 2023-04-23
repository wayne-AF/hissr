# Hissr

The live project can be found [here]()

![Mockup image]

## Table of Contents
1. [About]
2. [Project Goals]
3. [User Stories]
4. [Design]
    - [Colours]
    - [Imagery]
    - [Wireframes]
5. [Front-end]
6. [Back-end API]
5. [Features]
6. [Technologies Used]
7. [Validation]
8. [Testing]
9. [Deployment]
10. [Notes]

## About

## Project Goals

## User Stories
(Please see the [Notes](#notes) section concerning the numbering of User Stories on the project kanban board.)
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
35. As a user, I want the ability to follow and unfollow a user so that specific users’ posts will appear in my feed.
36. As a user, I want the ability to see the most followed profiles.
#### Other
37. As a user, I want the ability to receive feedback messages to tell me if my attempted action has been successful, e.g. updating a post or deleting a comment. 




## Design
### Wireframes

<details><summary>Sign up page</summary>
<img src="documentation/wireframes/sign_up_wireframe.png">
</details>
<details><summary>Sign in page</summary>
<img src="documentation/wireframes/sign_in_page.png">
</details>
<details><summary>Home page</summary>
<img src="documentation/wireframes/homepage_wireframe.png">
</details>
<details><summary>Post page</summary>
<img src="documentation/wireframes/postpage_wireframe.png">
</details>
<details><summary>Create post</summary>
<img src="documentation/wireframes/postcreate_wireframe.png">
</details>
<details><summary>Edit post</summary>
<img src="documentation/wireframes/postedit_wireframe.png">
</details>
<details><summary>Feed</summary>
<img src="documentation/wireframes/feed_wireframe.png">
</details>
<details><summary>Liked</summary>
<img src="documentation/wireframes/liked_wireframe.png">
</details>
<details><summary>Bolts page</summary>
<img src="documentation/wireframes/bolt_wireframe.png">
</details>
<details><summary>Bolt page</summary>
<img src="documentation/wireframes/boltpage_wireframe.png">
</details>
<details><summary>Create bolt</summary>
<img src="documentation/wireframes/personalcreate_wireframe.png">
</details>
<details><summary>Edit bolt</summary>
<img src="documentation/wireframes/personaledit_wireframe.png">
</details>
<details><summary>Profile</summary>
<img src="documentation/wireframes/profilepage_wireframe.png">
</details>
<details><summary>Edit profile</summary>
<img src="documentation/wireframes/profileedit_wireframe.png">
</details>
<details><summary>Change username</summary>
<img src="documentation/wireframes/usernameedit_wireframe.png">
</details>
<details><summary>Change password</summary>
<img src="documentation/wireframes/passwordedit_wireframe.png">
</details>

## Front-end
### 
React is an open-source front-end Javascript library for developers to easily create fast user interfaces for websites and applications based on individual and reusable components.

React was used for this project due to its:
- flexibility: React's modular structure makes it flexible and easier to maintain than other front-end frameworks
- reusability of components: repetition of code is kept to a minimum
- speed: React allows for the creation of applications with greater loading speeds, enhancing user experience
- React-Bootstrap: each Bootstrap component has been built as a React component, which makes them easy to implement and style

### Reused Components
- Asset: multipurpose component which displays different content depending on the props passed to it.
    - loading spinner when content is being loaded
    - image to indicate no results were found
    - message to indicate no results were found
    - User story: 18, 24
- Avatar: component used to render profile images of different sizes and source images depending on the passed props.
    - User story: 7, 28, 32, 36
- Dropdown menu: renders the dropdown menu for users to edit and delete their posts and bolts, edit their profile details, and change their username and password
    - User story: 10, 11, 16, 17, 21, 22, 29, 30, 31
- NavBar: component that displays different content depending on whether the user is logged in or not. Logged in users see Create, Home, Feed, Liked, Bolts, Profile, and Sign out icons. Logged out users see Home, Sign in, and Sign up icons. The component displays on every page across the app.
    - User story: 2, 3, 7
- PopularProfiles: component which displays the four more followed profiles in the app. Displayed are the user's avatar, user's name, and a follow/unfollow button. The button is only visible on larger screens.
    - User story: 36


## Back-end API


## Features


### Future Features


## Technologies Used


## Validation


## Testing


## Deployment


## Notes


