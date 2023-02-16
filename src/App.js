import React from "react"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails"
import { CssBaseline, Grid } from "@material-ui/core"
import { getPlacesData } from "./API"
import { useEffect, useState } from "react"

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  // console.log(coordinates)

  useEffect(() => {
    getPlacesData().then((data) => {
      // console.log(data)
      setPlaces(data)
    })
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          {/*This grid takes full width on mobile, md&lg only 4 spaces (out of 12) */}
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            // props below to pass to Maps component
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>

      {/* <PlaceDetails /> */}
    </>
  )
}

export default App
