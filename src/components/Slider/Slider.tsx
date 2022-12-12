import React from 'react';
import {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import {ChangeResult} from "multi-range-slider-react";
import s from "./Slider.module.css"


const Slider = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(75);

    return (
        <div>
            <div className={s.multiRangeSliderContainer}>
                <MultiRangeSlider
                    min={0}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e: ChangeResult) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                    }}
                    label={false}
                    ruler={false}
                    style={{border: "none",boxShadow: "none",padding:"15px 10px",color:'#21268F'}}
                    barLeftColor="#9A91C8"
                    barInnerColor="#21268F "
                    barRightColor="#9A91C8"
                    thumbLeftColor="#FFFFFF"
                    thumbRightColor="#FFFFFF"
                ></MultiRangeSlider>
            </div>
        </div>
    );
};

export default Slider;
