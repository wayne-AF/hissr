import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Personal from "./Personal";
import PopularProfiles from "../profiles/PopularProfiles";

function PersonalPage() {
  const { id } = useParams()
  const [personal, setPersonal] = useState({ results: [] })

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: personal}] = await Promise.all([
                axiosReq.get(`/personals/${id}`)
            ])
            setPersonal({results: [personal]})
            console.log(personal)
        } catch(err){
            console.log(err)
        }
    }
    handleMount()
  }, [id])


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile/>
        <Personal {...personal.results[0]} setPersonals={setPersonal} personalPage />
        
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PersonalPage;