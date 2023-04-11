import React from 'react'
import styles from '../../styles/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media } from 'react-bootstrap'
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
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner
  
    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55}/>
                    </Link>
                </Media>
            </Card.Body>
        </Card>
    )
}

export default Post