"use client";

import Image from "next/image";
import { SliderContainer } from "./styles";
import { ISliderProps } from "./interfaces";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useState } from "react";

const Slider = ({ photos, children, styles }: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const toLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const toRight = () => {
    if (currentIndex < photos.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <SliderContainer x={`${-(currentIndex * 100)}%`} {...styles}>
      {/* <section className="add-container">{children}</section> */}

      <div className="button-container">
        <button
          type="button"
          onClick={() => toLeft()}
          disabled={currentIndex > 0 ? false : true}
        >
          <IoIosArrowDropleftCircle size={60} />
        </button>
        <button
          type="button"
          onClick={() => toRight()}
          disabled={currentIndex < photos.length - 1 ? false : true}
        >
          <IoIosArrowDroprightCircle size={60} />
        </button>
      </div>

      <ul>
        {photos?.length > 0 &&
          photos?.map((e) => {
            return (
              <li key={e.public_id}>
                <img src={e.url} alt="image" />
              </li>
            );
          })}
      </ul>
    </SliderContainer>
  );
};

export default Slider;
