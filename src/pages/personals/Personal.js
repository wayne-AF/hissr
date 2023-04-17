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
        title,
        content,
        city,
        country,
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
            <p>
              {city}, {country}
            </p>
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
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
        {/* {is_owner ? (
            <OverlayTrigger placement="top" overlay={<Tooltip>You can't reply to your own persona!</Tooltip>}>
                <p>some symbol here</p>
            </OverlayTrigger>
        ) : currentUser ? (
                <Button 
                    className={`${btnStyles.Button} ml-auto m-3`}
                    onClick={() => {}}
                >
                    reply
                </Button>
        ) : (
            <OverlayTrigger placement="top" overlay={<Tooltip>Log in to reply to this personal!</Tooltip>}>
                <Button 
                    className={`${btnStyles.Button} ml-auto m-3`}
                >
                    reply
                </Button>
            </OverlayTrigger>
        )} */}
        <Button 
            className={`${btnStyles.Button} ml-auto m-3`}
            onClick={() => {}}>
        reply
      </Button>
    </Card>
  )
}

export default Personal