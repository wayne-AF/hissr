import React from 'react'
import styles from '../../styles/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'
import { axiosRes } from '../../api/axiosDefaults'
import { MoreDropdown } from '../../components/MoreDropdown'

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

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <strong>{ owner }</strong>
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
          <Link to={`/posts/${id}`}>
            <Card.Title><strong>{title}</strong></Card.Title>
          </Link>
        )}
        <p>
          
            {city}, {country}
              
          </p>
        
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          <Link to={`/posts/${id}`}>
            <i className="fa-regular fa-comment-dots" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post

