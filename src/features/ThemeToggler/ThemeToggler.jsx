import cls from "./ThemeToggler.module.css";
import { useTheme } from "../../hooks/useTheme";
import { THEME_STORAGE } from "../../constants";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    const onChangeHandler = (e) => {
        const updateTheme = e.target.checked === false ? "light" : "dark";
        setTheme(updateTheme);
        localStorage.setItem(THEME_STORAGE, updateTheme);
    };

    return (
        <label className={cls.switch}>
            <input type="checkbox" onChange={onChangeHandler} checked={theme === "dark"} />
            <span className={cls.slider}></span>
        </label>
    );
};
