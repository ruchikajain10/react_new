import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { COUNTRY_DATA_API_URL } from "../Constants/Constants";

export default function CountryDetails() {
  const navigate = useNavigate();

  const [countryData, setCountryData] = useState({
    capital: "",
    population: "",
    latitude: "",
    longitude: "",
    flag: "",
  });

  // Extract countryName from URL
  const { countryName } = useParams();

  useEffect(() => {
    // Get Country Data from API
    getCountryData(countryName).then((_data: any) => {
      try {
        let apiData = _data.data;
        // Set required data in the state
        setCountryData({
          capital: apiData[0].capital[0],
          population: apiData[0].population,
          latitude: apiData[0].latlng[0],
          longitude: apiData[0].latlng[1],
          flag: apiData[0].flags.png,
        });
      } catch (err) {
        console.warn(err);
      }
    });
  }, [countryName]);

  const getCountryData = (name: any) => {
    return axios.get(`${COUNTRY_DATA_API_URL}${name}`);
  };

  const handleCapitalWeatherClick = () => {
    navigate(`/country/capital/${countryData.capital}`);
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Table to render the data */}
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Capital</TableCell>
                    <TableCell>Population</TableCell>
                    <TableCell>Latitude</TableCell>
                    <TableCell>Longitude</TableCell>
                    <TableCell>Flag</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{countryData.capital}</TableCell>
                    <TableCell>{countryData.population}</TableCell>
                    <TableCell>{countryData.latitude}</TableCell>
                    <TableCell>{countryData.longitude}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: "40px", height: "30px" }}
                        src={countryData.flag}
                        alt="countryflag"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            {/* Button to show Capital Weather */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCapitalWeatherClick}
            >
              Capital Weather
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
