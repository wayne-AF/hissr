import React from 'react'
import styles from '../../styles/Post.module.css'
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Button, Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'
import { MoreDropdown } from '../../components/MoreDropdown'
// import { Tooltip } from 'bootstrap';
import { axiosRes } from '../../api/axiosDefaults';

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
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner
    const history = useHistory()

    const handleEdit = () => {
        history.push(`/personals/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/personals/${id}/`)
            history.goBack()
        } catch(err){
            console.log(err)
        }
    }

    const handleLike = async () => {
      try {
        const { data } = await axiosRes.post('/likes/', { personal: id });
        setPersonals((prevPersonals) => ({
          ...prevPersonals,
          results: prevPersonals.results.map((personal) => {
            return personal.id === id
              ? { ...personal, likes_count: personal.likes_count + 1, like_id: data.id }
              : personal;
          }),
        }));
      } catch (err) {
        console.log(err);
      }
    };

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
        console.log(err);
      }
    };

  return (
    <Card className={styles.Personal}>
        <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
              <strong>{ owner }</strong>
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
                    <i className={`${styles.PawLiked} ${styles.Paw} fas fa-paw`} />
                </span>
            ) : currentUser ? (
                <span onClick={handleLike}>
                    <i className={`${styles.PawNoLike} ${styles.Paw} fas fa-paw`} />
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

export default Personal