import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import { toast } from "react-toastify";

const Personal = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        likes_count,
        like_id,
        title,
        content,
        category,
        updated_at,
        personalPage,
        setPersonals
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    // Sends user to bolt edit form
    const handleEdit = () => {
        history.push(`/personals/${id}/edit`)
    }

    // Deletes the bolt
    // Sends the user to the bolts page
    // Displays confirmation message to the user using react-toastify
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/personals/${id}/`);
            toast.success("Bolt deleted successfully");
            history.push("/personals");
        } catch(err){
          toast.error("Something went wrong! Try again later.")
            // console.log(err)
        }
    };

    // Handles liking of the bolt by a user
    // Sends request to API using bolt ID and 
    // increments by 1
    const handleLike = async () => {
      try {
        const { data } = await axiosRes.post("/likes/", { personal: id });
        setPersonals((prevPersonals) => ({
          ...prevPersonals,
          results: prevPersonals.results.map((personal) => {
            return personal.id === id
              ? { ...personal, likes_count: personal.likes_count + 1, like_id: data.id }
              : personal;
          }),
        }));
      } catch (err) {
        toast.error("Something went wrong! Try again later")
      }
    };

    // Handles unliking of a bolt already liked by the user
    // Sends request to API using bolt ID and
    // decrements by 1
    const handleUnlike = async () => {
      try {
        await axiosRes.delete(`/likes/${like_id}/`);
        setPersonals((prevPersonals) => ({
          ...prevPersonals,
          results: prevPersonals.results.map((personal) => {
            return personal.id === id
              ? { ...personal, likes_count: personal.likes_count - 1, like_id: null }
              : personal;
          }),
        }));
      } catch (err) {
        toast.error("Something went wrong! Try again later.")
        // console.log(err);
      }
    };

  return (
    <Card className={styles.Personal}>
        <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <div className="d-flex align-items-center">
                <Avatar src={profile_image} height={55} />
                <h5 
                  className={`${styles.ProfileLink} font-weight-bold`}
                >
                  { owner }
                </h5>
              </div>
            </Link>
            <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              {is_owner && personalPage && 
                <MoreDropdown 
                  handleEdit={handleEdit} 
                  handleDelete={handleDelete}
                />}
            </div>
          </Media>
        </Card.Body>
        <Card.Body>
            {title && <Link to={`/personals/${id}`}>
                <Card.Title><strong>{title}</strong></Card.Title>
            </Link> 
            }
            {category && <p className={styles.Category}>#{category}</p>}
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
        
        <div className={styles.PostBar}>
            {is_owner ? (
                <OverlayTrigger 
                  placement="top" 
                  overlay={<Tooltip>You can't like your own bolt!</Tooltip>}
                >
                    <i className={`${styles.PawGrey} fas fa-paw`} />
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={handleUnlike}>
                    <i 
                      className={`${styles.PawLiked} ${styles.Paw} fas fa-paw`}
                    />
                </span>
            ) : currentUser ? (
                <span onClick={handleLike}>
                    <i 
                      className={`${styles.PawNoLike} ${styles.Paw} fas fa-paw`}
                    />
                </span>
            ) : (
                <OverlayTrigger 
                  placement="top" 
                  overlay={<Tooltip>Log in to like, meow!</Tooltip>}
                >
                    <i className={`${styles.PawGrey} fas fa-paw`} />
                </OverlayTrigger>
            )}
            {likes_count}
        </div>
    </Card>
  )
}

export default Personal;