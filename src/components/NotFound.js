import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import appStyles from "../App.module.css";
import Asset from "./Asset";

// Displays a 404 page with No-Results cat image
const NotFound = () => {
  return (
    <div className={`${styles.NotFoundGraphic} ${appStyles.Content}`}>
        <Asset 
          src={NoResults} 
          message="Sorry, the page you're looking for doesn't exist" 
        />
    </div>
  )
}

export default NotFound