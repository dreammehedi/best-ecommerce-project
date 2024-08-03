import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

function useUserData() {
  const [user, setUser] = useState(null);
  const [userLoader, setUserLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axiosSecure.get("/user");
        const resData = await response.data;
        console.log("resdata", resData);
        setUser(resData);
        setUserLoader(false);
      } catch (error) {
        setUserLoader(false);
      }
    };
    getUserData();
  }, [axiosSecure]);

  return { user, userLoader };
}

export default useUserData;
