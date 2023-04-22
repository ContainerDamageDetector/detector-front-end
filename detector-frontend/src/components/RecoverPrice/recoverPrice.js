import React, { Component, useEffect, useState } from "react";
import styles from "./recoverPrice.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { getImageData } from "../../services/auth.service";
import { useParams } from "react-router-dom";


function RecoverPriceComponent() {

  const { id } = useParams();
  const [recoverPrice, setRecoverPrice] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    getImageData(parseInt(id))
      .then((res) => {
        console.log(res.data.data.imageUrl);
          setImageData(res.data.data.imageUrl);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const [imageData, setImageData] = useState(imageSrc);
  console.log("imageData", imageData)

  useEffect(() => {
    getImageData(parseInt(id))
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data.recover_price);
        setRecoverPrice(res.data.data.recover_price);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    if (!imageData) return 
    const key = imageData.split("images/")[1];
    
    fetch(
      `http://localhost:3001/api/image/uploads/images/${key}`
    )
      .then((response) => response.blob())
      .then((data) => {
        setImageSrc(URL.createObjectURL(data));
      });
  }, [imageData]);

  return (
    

    <div>
      {/* <h1>Recover Price Component</h1>
      <p>Id: {id}</p>
      {recoverPrice && <p>Recover Price: {recoverPrice}</p>} */}

      <div>
        <NavigationComponent></NavigationComponent>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>
                Estimated recover price for container damage
              </h1>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid
                  container
                  // spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "10vh" }}
                >
                  <Grid item xs={3} sm={1} md={1} lg={1} xl={1}>
                    <Card
                      variant="outlined"
                      sx={{ minWidth: 1000, minHeight: 500 }}
                    >
                      <img style={{ width: '1000px', height: '500px' }} src={imageSrc} alt="Container Image" />
                    </Card>
                  </Grid>

                  <Grid item xs={3} sm={1} md={1} lg={1} xl={1}>
                    <Grid container spacing={2} columns={16}>
                      <Grid p xs={8}>
                        <h4>Estimated Recover Price</h4>
                      </Grid>
                      <Grid p xs={8}>
                        {/* <p>(Estimated Recover Price)</p> */}

                        {<p>{recoverPrice}</p>}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default RecoverPriceComponent;
