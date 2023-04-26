import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { countries } from "../../components/Countries";
import { toast } from "react-toastify";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    about: "",
    image: "",
    city: "",
    country: "",
  });
  const { name, about, image, city, country } = profileData;

  const [errors, setErrors] = useState({});

  // Handles editing of user's profile data
  // Makes a request to the API based on user's profile ID
  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, about, image, city, country } = data;
          setProfileData({ name, about, image, city, country });
        } catch (err) {
          // console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  // Handles changes to the input fields
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles submission of profile form's data
  // Displays a confirmation message using react-toastify
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("about", about);
    formData.append("city", city);
    formData.append("country", country);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      toast.success("Profile updated successfully")
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
      toast.error("Something went wrong! Try again later.")
    }
  };

  const textFields = (
    <>
      <Form.Group>
         <Form.Label>City</Form.Label>
         <Form.Control 
             placeholder="enter your city"
             type="text"
             name="city"
             value={city}
             aria-label="city"
             onChange={handleChange}
             />
      </Form.Group>
      {errors?.city?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Country</Form.Label>
         <Form.Control
            as="select"
             name="country"
             className={appStyles.Input}
             value={country}
             aria-label="country"
             onChange={handleChange}
         >
          {/* Populates the list with the values from Countries.js */}
           <option>choose your country</option>
           {countries.map((countrySelect) => 
              <option value={countrySelect.code} key={countrySelect.code}>
                 {countrySelect.name}
               </option>
               )}
        </Form.Control>    
       </Form.Group>
       {errors?.country?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>About</Form.Label>
        <Form.Control
          as="textarea"
          value={about}
          onChange={handleChange}
          name="about"
          aria-label="about"
          rows={4}
        />
      </Form.Group>
      {errors?.about?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={btnStyles.Button}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col 
          md={5} 
          lg={6} 
          className="d-none d-md-block p-0 p-md-2 text-center"
        >
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;

// import React, { useState, useEffect, useRef } from "react";
// import { useHistory, useParams } from "react-router-dom";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Alert from "react-bootstrap/Alert";
// import styles from "../../styles/PostCreateEditForm.module.css";
// import { axiosReq } from "../../api/axiosDefaults";
// import {
//   useCurrentUser,
//   useSetCurrentUser,
// } from "../../contexts/CurrentUserContext";

// import btnStyles from "../../styles/Button.module.css";
// import appStyles from "../../App.module.css";
// import { countries } from "../../components/Countries";

// const ProfileEditForm = () => {
//   const currentUser = useCurrentUser();
//   const setCurrentUser = useSetCurrentUser();
//   const { id } = useParams();
//   const history = useHistory();
//   const imageFile = useRef();

//   const [profileData, setProfileData] = useState({
//     name: "",
//     about: "",
//     image: "",
//     country: "",
//     city: "",
//     // tell_me: "",
//     // ask_me: ""
//   });
//   const { name, about, image, country, city } = profileData;

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const handleMount = async () => {
//       if (currentUser?.profile_id?.toString() === id) {
//         try {
//           const { data } = await axiosReq.get(`/profiles/${id}/`);
//           const { name, about, image, country, city } = data;
//           setProfileData({ name, about, image, country, city });
//         } catch (err) {
//           console.log(err);
//           history.push("/");
//         }
//       } else {
//         history.push("/");
//       }
//     };

//     handleMount();
//   }, [currentUser, history, id]);

//   const handleChange = (event) => {
//     setProfileData({
//       ...profileData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("about", about);
//     formData.append("country", country);
//     formData.append("city", city);
//     // formData.append("tell_me", tell_me);
//     // formData.append("ask_me", ask_me);

//     if (imageFile?.current?.files[0]) {
//       formData.append("image", imageFile?.current?.files[0]);
//     }

//     try {
//       const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
//       setCurrentUser((currentUser) => ({
//         ...currentUser,
//         profile_image: data.image,
//       }));
//       history.goBack();
//     } catch (err) {
//       console.log(err);
//       setErrors(err.response?.data);
//     }
//   };

//   const textFields = (
//     <>
//       <Form.Group>
//         <Form.Label>City</Form.Label>
//         <Form.Control 
//             placeholder="enter your city"
//             type="text"
//             name="city"
//             value={city}
//             onChange={handleChange}
//             />
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Country</Form.Label>
//         <Form.Control
//             // as="select"
//             type="text"
//             name="country"
//             className={appStyles.Input}
//             value={country}
//             onChange={handleChange}
//         >
//           {/* <option>choose your country</option>
//           {countries.map((country) => <option key={country.name} value={country.name}>
//                 {country.name}
//               </option>
//               )} */}
//         </Form.Control>    
        
//       </Form.Group>
//       {/* {errors?.country?.map((message, idx) => (
//         <Alert variant="warning" key={idx}>
//           {message}
//         </Alert>
//       ))} */}
//       <Form.Group>
//         <Form.Label>About</Form.Label>
//         <Form.Control
//           placeholder="what do you want to say about yourself?"
//           as="textarea"
//           value={about}
//           onChange={handleChange}
//           name="about"
//           rows={4}
//         />
//       </Form.Group>
//       {errors?.about?.map((message, idx) => (
//         <Alert variant="warning" key={idx}>
//           {message}
//         </Alert>
//       ))}

//       {/* <Form.Group>
//         <Form.Label>Tell me</Form.Label>
//         <Form.Control 
//             placeholder="what do you want kitties to tell you?"
//             type="text"
//             name="tell_me"
//             value={tell_me}
//             onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Ask me</Form.Label>
//         <Form.Control 
//             placeholder="what do you want kitties to ask you?"
//             type="text"
//             name="ask_me"
//             value={ask_me}
//             onChange={handleChange}
//         />
//       </Form.Group> */}
      
      
      

      
//       <Button
//         className={`${btnStyles.Button} ${btnStyles.Blue}`}
//         onClick={() => history.goBack()}
//       >
//         cancel
//       </Button>
//       <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
//         save
//       </Button>
//     </>
//   );

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Row>
//         <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
//           <Container className={appStyles.Content}>
//             <Form.Group>
//               {image && (
//                 <figure>
//                   <Image src={image} fluid />
//                 </figure>
//               )}
//               {errors?.image?.map((message, idx) => (
//                 <Alert variant="warning" key={idx}>
//                   {message}
//                 </Alert>
//               ))}
//               <div>
//                 <Form.Label
//                   className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
//                   htmlFor="image-upload"
//                 >
//                   Change your profile pic
//                 </Form.Label>
//               </div>
//               <Form.File
//                 id="image-upload"
//                 ref={imageFile}
//                 accept="image/*"
//                 onChange={(e) => {
//                   if (e.target.files.length) {
//                     setProfileData({
//                       ...profileData,
//                       image: URL.createObjectURL(e.target.files[0]),
//                     });
//                   }
//                 }}
//               />
//             </Form.Group>
//             {/* <div className="d-md-none">{textFields}</div> */}
//           </Container>
//         </Col>
//         {/* <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
//           <Container className={appStyles.Content}>{textFields}</Container>
//         </Col> */}
//       </Row>
//       <Row>

//       <Container className={ `mt-3 p-3 ${appStyles.Content}`}>
//         <Row>
//           <Col className="text-center pb-2"><h5>Edit your profile</h5></Col>
          
//         </Row>
//         {/* <Row>
//           <Col classname="text-center"><h4></h4></Col>
//         </Row> */}
//         <Row className={`${styles.Row} `}>
//           <Col>{textFields}</Col>
//           </Row>
        
//       </Container>
//       </Row>
//     </Form>
//   );
// };

// export default ProfileEditForm;