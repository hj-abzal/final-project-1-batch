import React from 'react';
import {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import {ChangeResult} from "multi-range-slider-react";
import   "./Slider-m.css"


const Slider = () => {
    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(112);

    return (
        <div>
            <div className='multi-range-slider-container'>
                <MultiRangeSlider
                    min={-20}
                    max={160}
                    step={6}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e: ChangeResult) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                    }}
                    label={false}
                    ruler={false}
                    style={{border: "none",boxShadow: "none",padding:"40px 10px",color:'#21268F'}}
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
