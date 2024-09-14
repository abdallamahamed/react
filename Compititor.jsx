import React from "react";
import styles from "./Compititor.module.scss";
import compititors from "../../assets/compititors.json";
const compititor = () => {
  return (
    <div className={styles.compititos_container}>
      <div className={styles.header}>
        <span className={styles.spann}>miss somali</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          eaque recusandae blanditiis beatae fugiat debitis,blanditiis beatae
          fugiat debitis,
        </p>
      </div>
      <div className={styles.compititor}>
        {compititors.map((compititor) => (
          <span>{compititor.FirstName}</span>
        ))}
      </div>
    </div>
  );
};

export default compititor;
