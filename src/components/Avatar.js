import React from "react";
import styles from "../styles/Avatar.module.css";

// Avatar component with a default height prop and text prop
const Avatar = ({src, height=45, text}) => {
  return (
    <div>
        <img 
          className={styles.Avatar} 
          src={src} height={height} 
          width={height} 
          alt="avatar" 
        />
        {text}
    </div>
  )
}

export default Avatar