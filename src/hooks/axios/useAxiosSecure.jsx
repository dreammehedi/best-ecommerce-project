import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

function useAxiosSecure() {
  return axiosPublic;
}

export default useAxiosSecure;
