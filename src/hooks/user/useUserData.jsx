import { useEffect, useState } from "react";

function useUserData() {
  const [user, setUser] = useState(null);
  const [userLoader, setUserLoader] = useState(false);
  useEffect(() => {
    setUserLoader(true);
    const getToken = JSON.parse(localStorage.getItem("token")) || null;
    setUser(getToken);
    setUserLoader(false);
  }, []);

  return { user, userLoader };
}

export default useUserData;
