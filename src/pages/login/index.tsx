import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import LoginForm from "../../components/Forms/LoginForm";
import Slider from "../../components/Slider";

const LoginPage = () => {
  const sliderImgs = [
    "Tenis.jpg",
    // "truck.jpeg",
    "truck1.png",
    "Tenis.jpg",
    "Tenis.jpg",
    // "Tenis.jpg",
    // "Tenis.jpg",
  ];
  return (
    <>
      <Slider imageURLsList={sliderImgs}>
        <div className="add">
          <span></span>
          {/* <Image src="/g1725-black.svg" alt="" width={100} height={100} /> */}

          <p>As melhores marcas você encontra aqui.</p>
          {/* <TbTargetArrow size={50} /> */}
        </div>
        <LoginForm />
      </Slider>
    </>
  );
};
export default LoginPage;
