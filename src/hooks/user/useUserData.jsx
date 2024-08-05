import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function useUserData() {
  const [user, setUser] = useState(null);
  const [userLoader, setUserLoader] = useState(true);

  useEffect(() => {
    const userDataFindInToken = async () => {
      setUserLoader(true);
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Invalid token", error);
      } finally {
        setUserLoader(false);
      }
    };
    userDataFindInToken();
  }, []);

  return { user, userLoader };
}

export default useUserData;
