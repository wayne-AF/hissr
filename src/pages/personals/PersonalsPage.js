import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png"
import InfiniteScroll from "react-infinite-scroll-component";
import Personal from "./Personal";
import Asset from "../../components/Asset";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PersonalsPage({ message, filter = "" }) {
    const [personals, setPersonals] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] = useState("");
    const currentUser = useCurrentUser();

    // Handles API request using filters to display relevent personals
    useEffect(() => {
        const fetchPersonals = async () => {
            try {
                const {data} = await axiosReq.get(
                    `/personals/?${filter}search=${query}`
                    );
                setPersonals(data);
                setHasLoaded(true);
            } catch(err){
                // console.log(err)
            }
        }
        setHasLoaded(false);
        // Delays the API request until 1 second
        // after user has finished typing
        const timer = setTimeout(() => {
            fetchPersonals()
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
        
    }, [filter, query, pathname, currentUser]);
  
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
                aria_label="search bar"
                onChange={(event) => setQuery(event.target.value)}
            />
        </Form>
        {hasLoaded ? (
            <>
                {personals.results.length ? (
                    <InfiniteScroll 
                        children={
                            personals.results.map((personal) => (
                                <Personal 
                                    key={personal.id} 
                                    {...personal} 
                                    setPersonals={setPersonals} 
                                />
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
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PersonalsPage;