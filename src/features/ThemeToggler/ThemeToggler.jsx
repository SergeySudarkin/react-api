import cls from "./ThemeToggler.module.css";
import { useTheme } from "../../hooks/useTheme";
import { THEME_STORAGE } from "../../constants";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    const onChangeHandler = (e) => {
        const isChecked = e.target.checked === true;
        const updateTheme = isChecked ? "dark" : "light";

        setTheme(updateTheme);
        isChecked ? document.body.classList.add("darkLayout") : document.body.classList.remove("darkLayout");
        localStorage.setItem(THEME_STORAGE, updateTheme);
    };

    return (
        <label className={cls.switch} aria-label="Переключатель смены темы">
            <input type="checkbox" onChange={onChangeHandler} checked={theme === "dark"} />
            <span className={cls.slider}></span>
        </label>
    );
};
