import { useContext, useEffect } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import { UserContext } from "../../app/contexts/user";
import { getAuthToken } from "../../services/cookies";
import { LoadingElement } from "../../components/LoadingElement";

const LoginPage = () => {
  const { router, isLoading, setIsLoading } = useContext(UserContext);
  const authToken = getAuthToken();

  useEffect(() => {
    setIsLoading(false);
    const token = localStorage.getItem("@lvrsk8shop-auth-token");

    if (authToken || token) {
      setIsLoading(true);

      router.push("/");
    }
  }, []);

  return isLoading ? <LoadingElement /> : <LoginForm />;
};
export default LoginPage;
