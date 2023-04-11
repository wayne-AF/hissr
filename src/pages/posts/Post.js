import React from 'react'
import styles from '../../styles/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'

const Post = (props) => {
    const {
        id, 
        owner, 
        profile_id, 
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        city,
        country,
        category,
        content,
        updated_at,
        postPage,
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner
  
    return (
      <Card className={styles.Post}>
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
            </Link>
            <p>
              {city}, {country}
            </p>
            <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              {is_owner && postPage && "..."}
            </div>
          </Media>
        </Card.Body>
        <Card.Body>
          {title && <Card.Title>{title}</Card.Title>}
          <p>{category}</p>
          {content && <Card.Text>{content}</Card.Text>}
          <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own post!</Tooltip>}>
                            <i className="fas fa-paw" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={() => {}}>
                            <i className={`fas fa-paw ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => {}}>
                            <i className={`fas fa-paw ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like posts, meow!</Tooltip>}>
                            <i className="fas fa-paw" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
                
        </Card.Body>
      </Card>
    );
}

export default Post