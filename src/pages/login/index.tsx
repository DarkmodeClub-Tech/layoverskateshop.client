import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import LoginForm from "../../components/Forms/LoginForm";
import Slider from "../../components/Slider";

const LoginPage = () => {
  const sliderImgs = ["brand-betterOne.png"];
  return (
    <>
      <Slider imageURLsList={sliderImgs}>
        <LoginForm />
      </Slider>
    </>
  );
};
export default LoginPage;
