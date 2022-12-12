import SwitchSelector from "react-switch-selector";
import s from './Switch.module.css'


export const SwitchSelect = () => {

    const options = [
        {
            label: <span className={s.switcher}> My </span>,
            value: {
                foo: true
            },
            selectedBackgroundColor: "#9A91C8",
        },
        {
            label: <span className={s.switcher}>All </span>,
            value: "bar",
            selectedBackgroundColor: " #9A91C8"
        }
    ];

    const onChange = (newValue: any) => {
        console.log(newValue);
    };
    const initialSelectedIndex = options.findIndex(({value}) => value === "bar");

    return (
        <div className={s.SwitcherWrapper}>
            <SwitchSelector switch-selected-wrapper={s.switch}
                            wrapperBorderRadius={0}
                            optionBorderRadius={0}
                            onChange={onChange}
                            options={options}
                            initialSelectedIndex={initialSelectedIndex}
                            backgroundColor={"#FFFFFF"}
                            fontColor={"#2D2E46"}
            />
        </div>
    );
}