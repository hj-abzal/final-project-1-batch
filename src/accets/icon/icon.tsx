import React from 'react';
export type Icons = {
    eye: Eye
    eyeOff: EyeOff
}
type Eye = {
   img: string
}
type EyeOff = {
   img: string
}

export const eye = (props:Eye) => {
    return (
        <div>
            <img src='../../accets/icon/eye.svg'/>
        </div>
    );
};

export const eyeOff = (props:EyeOff) => {
    return (
        <div>
            <img src='../../accets/icon/eye-off.svg'/>
        </div>
    );
};

