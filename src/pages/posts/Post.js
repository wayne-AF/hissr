import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { toast } from "react-toastify";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    title,
    city,
    country,
    content,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  // Handles any edits made to the input fields
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Handles deletion of the post
  // Gives user confirmation message using react-toastify
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push("/");
      toast.success("Post deleted")
    } catch (err) {
      toast.error("Something went wrong! Try again later.")
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <div className="d-flex align-items-center">
              <Avatar src={profile_image} height={55} />
              <h5 
                className={`${styles.ProfileLink} font-weight-bold`}>
                  { owner }
                </h5>
            </div>
          </Link>
          
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        
        {title && (
          <Link 
            className={`${styles.Link} text-center card-body-link`} 
            to={`/posts/${id}`}
          >
            <Card.Title><strong>{title}</strong></Card.Title>
          </Link>
        )}
        <p className="text-center">
            {city}, {country}
          </p>
        {content && <Card.Text>{content}</Card.Text>}
        <div className="text-center">
          <Link to={`/posts/${id}`}>
            <span>
              <i className={`${styles.Comment} fa-regular fa-comment-dots`} />
            </span>
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;

