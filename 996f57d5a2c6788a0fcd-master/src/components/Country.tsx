import React, { useState } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Country() {
  // useNavigate hook to Navigate in click Handler
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState("");

  // Change handler to set country Input value in state
  const handleCountryName = (event: any) => {
    setCountryName(event.target.value);
  };

  // Click handler to navigate to a dynamic route
  const handleCountrySubmit = () => {
    navigate(`/country/${countryName}`);
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* TextField to take Country Name Input */}
            <TextField
              variant="outlined"
              label="Enter Country Name"
              fullWidth
              value={countryName}
              onChange={handleCountryName}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Button to submit and disabled when countryName state length is 0 */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={countryName.length !== 0 ? false : true}
              onClick={handleCountrySubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
