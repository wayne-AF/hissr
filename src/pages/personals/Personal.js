import React from 'react'
import styles from '../../styles/Post.module.css'
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Button, Card, Media, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'
import { MoreDropdown } from '../../components/MoreDropdown'
import { Tooltip } from 'bootstrap';

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
        personalPage
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner

  return (
    <Card className={styles.Post}>
        <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
              { owner }
            </Link>
            <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              {is_owner && personalPage && 
                <MoreDropdown 
                //   handleEdit={handleEdit} 
                //   handleDelete={handleDelete}
                />}
            </div>
          </Media>
        </Card.Body>
        <Card.Body>
            {title && <Link to={`/personals/${id}`}>
                <Card.Title>{title}</Card.Title>
            </Link> 
            }
            {category && <p>{category}</p>}
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
        <div className={styles.PostBar}>
            {is_owner ? (
                <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own personal!</Tooltip>}>
                    <i className="fas fa-paw" />
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={() =>{}}>
                    <i className="fas fa-paw" />
                </span>
            ) : currentUser ? (
                <span onClick={() => {}}>
                    <i className="fas fa-paw" />
                </span>
            ) : (
                <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like, meow!</Tooltip>}>
                    <i className="fas fa-paw" />
                </OverlayTrigger>
            )}
            {likes_count}
        </div>
        <Button 
            className={`${btnStyles.Button} ml-auto m-3`}
            onClick={() => {}}>
        reply
      </Button>
    </Card>
  )
}

export default Personal