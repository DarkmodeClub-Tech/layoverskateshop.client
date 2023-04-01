import Image from "next/image";
import { useState } from "react";
import { SliderContainer } from "./styles";
import { TbTargetArrow } from "react-icons/tb";

interface ISliderProps {
  imageURLsList?: string[];
}

const Slider = ({ imageURLsList }: ISliderProps) => {
  const [currentIndex, setCurentIndex] = useState(0);
  return (
    <SliderContainer x={`${currentIndex * 100}%`}>
      <section className="add-container">
        <div className="add">
          <Image src="/g1725-black.svg" alt="" width={100} height={100} />

          <p>As melhores marcas você encontra aqui.</p>
          <span>
            <TbTargetArrow size={50} />
          </span>
        </div>
      </section>
      <ul>
        {imageURLsList && imageURLsList.length > 0 ? (
          imageURLsList?.map((e, index) => {
            return (
              <li key={index}>
                <img src={e} alt="image" />
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </SliderContainer>
  );
};

export default Slider;
