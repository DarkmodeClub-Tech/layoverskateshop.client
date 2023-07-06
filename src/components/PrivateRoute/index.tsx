import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { getAuthToken } from "../../services/cookies";

type TPrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: TPrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = getAuthToken();
    if (isAuthenticated) {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
};
