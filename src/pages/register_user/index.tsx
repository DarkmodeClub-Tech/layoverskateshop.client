import Image from "next/image";
import RegisterUser from "../../components/Forms/RegisterUserForm";
import Slider from "../../components/Slider";

const RegisterUserPage = () => {
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
      <Slider
        imageURLsList={sliderImgs}
        styles={{ addContainerHeight: "80%", addContainerWidth: "80%" }}
      >
        <RegisterUser />
        <div className="add">
          <span></span>
          {/* <Image src="/g1725-black.svg" alt="" width={100} height={100} /> */}

          {/* <p>As melhores marcas você encontra aqui.</p> */}
          <p>
            Cadastre-se e encontre os melhores produtos nos melhores preços.
          </p>
          {/* <TbTargetArrow size={50} /> */}
        </div>
      </Slider>
    </>
  );
};

export default RegisterUserPage;
