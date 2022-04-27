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
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

import { WEATHER_STACK_API_URL } from "../Constants/Constants";

export default function CapitalDetails() {
  const [capitalData, setCapitalData] = useState({
    tempreture: "",
    weatherIcons: "",
    weather: "",
    windSpeed: "",
    precip: "",
  });

  // Extract countryName from URL
  const { capitalName } = useParams();

  useEffect(() => {
    // Get Country Data from API
    getCapitalWeather(capitalName).then((_data: any) => {
      try {
        let apiData = _data.data.current;
        // Set required data in the state

        console.log(apiData);

        setCapitalData({
          tempreture: apiData.temperature,
          weatherIcons:
            apiData.weather_icons.length !== 0 ? apiData.weather_icons[0] : "",
          weather:
            apiData.weather_descriptions.length !== 0
              ? apiData.weather_descriptions[0]
              : "",
          windSpeed: apiData.wind_speed,
          precip: apiData.precip,
        });
      } catch (err) {
        console.warn(err);
      }
    });
  }, [capitalName]);

  const getCapitalWeather = (name: any) => {
    return axios.get(`${WEATHER_STACK_API_URL}${name}`);
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
                    <TableCell>Temperature</TableCell>
                    <TableCell>Weather Icon</TableCell>
                    <TableCell>Weather</TableCell>
                    <TableCell>Wind</TableCell>
                    <TableCell>Precip</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{capitalData.tempreture}</TableCell>
                    <TableCell>
                      <img
                        alt="weather icons"
                        src={capitalData.weatherIcons}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </TableCell>
                    <TableCell>{capitalData.weather}</TableCell>
                    <TableCell>{capitalData.windSpeed}</TableCell>
                    <TableCell>{capitalData.precip}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
