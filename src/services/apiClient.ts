import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d76061998333404ebf7e66573cf761f9",
  },
})
