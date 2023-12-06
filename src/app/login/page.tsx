import { useContext, useEffect } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import { UserContext, useUserContext } from "../../app/contexts/user";
import { getAuthToken } from "../../services/cookies";
import { LoadingElement } from "../../components/LoadingElement";
import useRouter from "next/navigation";

const LoginPage = () => {
  const {} = useUserContext();
  //   const {} = useRouter();
  const authToken = getAuthToken();

  useEffect(() => {
    const token = localStorage.getItem("@lvrsk8shop-auth-token");

    if (authToken || token) {
      //   router.push("/");
    }
  }, []);

  return <LoginForm />;
};
export default LoginPage;
