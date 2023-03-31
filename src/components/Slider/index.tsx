import Image from "next/image";
import { useState } from "react";
import { SliderContainer } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ISliderProps {
  imageURLsList?: string[];
}

const Slider = ({ imageURLsList }: ISliderProps) => {
  const [currentIndex, setCurentIndex] = useState(0);
  return (
    <SliderContainer>
      <div className="button-container">
        <button type="button" onClick={() => setCurentIndex(currentIndex - 1)}>
          {<IoIosArrowBack size={30} />}
        </button>
        <button type="button" onClick={() => setCurentIndex(currentIndex + 1)}>
          {<IoIosArrowForward size={30} />}
        </button>
      </div>
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
