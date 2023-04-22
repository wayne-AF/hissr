import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
// import Post from "./Post";
import NoResults from "../../assets/no-results.png"
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import PopularProfiles from "../profiles/PopularProfiles";
import Post from "../posts/Post";
import Personal from "../personals/Personal";

function HomeFeed({ message, filter = ""}) {
    const [posts, setPosts] = useState({ results: [] })
    const [personals, setPersonals] = useState({ results: [] })
    const [allContent, setAllContent] = useState({ results: [] })
    const [hasLoaded, setHasLoaded] = useState(false)
    const { pathname } = useLocation()

    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {
            // try {
            //     const {cats} = await axiosReq.get(`/personals/?${filter}search=${query}`)
            //     const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
                
            //     setPosts(data)
            //     setPersonals(cats)
            //     setHasLoaded(true)
            // } catch(err){
            //     console.log(err)
            // }
            try {
                const [{ data: posts }, { data: personals }] = 
                    await Promise.all([
                        axiosReq.get(`/personals/?${filter}search=${query}`),
                        axiosReq.get(`/posts/?${filter}search=${query}`)
                    ])
                    // setProfileData((prevState) => ({
                    //     ...prevState,
                    //     pageProfile: { results: [pageProfile] }
                    // }))
                    setPosts(posts)
                    setPersonals(personals)
                    let allContent = [...posts.results, ...personals.results]
                    // Sorting dates of posts and personals according to created_at date.
                    allContent = allContent.sort((a, b) => {
                        const dateA = new Date(a.created_at);
                        const dateB = new Date(b.created_at);
                        return dateA > dateB ? -1 : dateA < dateB ? 1  : 0
                    })
                    setAllContent(allContent)
                    setHasLoaded(true); 
            } catch(err){
                console.log(err)
            }
        }
        setHasLoaded(false)
        const timer = setTimeout(() => {
            fetchPosts()
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [filter, query, pathname])
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile/>
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
        {hasLoaded ? (
            <>
                {allContent.length ? (
                    <InfiniteScroll 
                        children={
                            allContent.map((post) => (
                                // <Post key={post.id} {...post} setPosts={setPosts} />
                                post.category ?
                                <Personal key={`PER-${post.id}`} {...post} setPersonals={setPersonals} /> 
                                :
                                <Post key={`POS-${post.id}`} {...post} setPosts={setPosts} />
                            ))
                        }
                        // dataLength={posts.results.length}
                        // loader={<Asset spinner />}
                        // hasMore={!!posts.next}
                        // next={() => fetchMoreData(allContent, setAllContent)}
                        dataLength={allContent.length}
                        loader={<Asset spinner />}
                        hasMore={!!allContent.next}
                        next={() => fetchMoreData(allContent, setAllContent)}
                    />
                    
                ) : (<Container className={appStyles.Content}>
                    <Asset src={NoResults} message={message}/>    
                </Container>)}
            </>
        ) : (
            <Container className={appStyles.Content}>
                <Asset spinner />
            </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default HomeFeed;