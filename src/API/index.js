// all api calls in here
import axios from "axios"

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "cb1b8107dbmsh08d34edbdc2ea14p1d93ddjsn6a68a80a9f33",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
}

export const getPlacesData = async () => {
  try {
    // request to google places api
    const {
      data: { data },
    } = await axios.get(URL, options)

    return data
  } catch (error) {
    // if fail to get data from google places api
    console.log(error)
  }
}


