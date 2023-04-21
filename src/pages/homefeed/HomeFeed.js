import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults'
import styles from "../../styles/PostsPage.module.css";

import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Col, Container, Form, Row } from 'react-bootstrap'
import PopularProfiles from '../profiles/PopularProfiles'
import Personal from '../personals/Personal';

function HomeFeed ({ message, filter = ""}) {
    // const [personals, setPersonals] = useState({ results: [] })
    // const [posts, setPosts] = useState({ results: [] })
    // const {pageHomeFeed} = useProfileData()
    const [allContent, setAllContent] = useState({ results: [] })
    const [hasLoaded, setHasLoaded] = useState(false)
    const [query, setQuery] = useState("")
    const {id} = useParams()

    const { pathname } = useLocation()
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
    }

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
        }
          

            useEffect(() => {
                const fetchData = async () => {
                    try {
                        const [{ data: Post }, { data: Personal }] = 
                            await Promise.all([
                                axiosReq.get(`/posts/${id}/`),
                                axiosReq.get(`/personals/${id}`)
                            ])
                            setAllContent((prevContent) => ({
                                ...prevContent
                                // : { results: [pageHomeFeed] }
                            }))
                            setAllContent()
                            setHasLoaded(true); 
                    } catch(err){
                        console.log(err)
                    }
                }
                  fetchData()
              }, [id])
        
  
 

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
        >
            <Form.Control
                type="text"
                className="mr-sm-2"
                placeholder="enter your search keyword"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </Form>

        <Container>
            {allContent.forEach((content) => (
            
            <Personal key={content.id} {...content} />
            ))}

        </Container>
        {/* {hasLoaded ? (
            <>
                {allContent.results.length ? (
                    <InfiniteScroll 
                        children={
                            allContent.results.map((content) => (
                                <Personal key={personal.id} {...personal} setPersonals={setPersonals} />
                            ))
                        }
                        dataLength={personals.results.length}
                        loader={<Asset spinner />}
                        hasMore={!!personals.next}
                        next={() => fetchMoreData(personals, setPersonals)}
                    />
                    
                ) : (<Container className={appStyles.Content}>
                    <Asset src={NoResults} message={message} />    
                </Container>)}
            </>
        ) : (
            <Container className={appStyles.Content}>
                <Asset spinner />
            </Container>
        )} */}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}



export default HomeFeed