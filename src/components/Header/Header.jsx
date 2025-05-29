import { useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import { Button } from "../Button";
import cls from "./Header.module.css";
import { ThemeToggler } from "../../features/ThemeToggler";

export const Header = () => {
    const navigate = useNavigate();
    const currentDate = Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "long",
    }).format(new Date());

    return (
        <header className={cls.header}>
            <p className={cls.info} onClick={() => navigate("/")}>
                <img src={ReactLogo} alt="react logo" />
                <span>React Interface</span>
            </p>

            <ThemeToggler />

            <p className={cls.headerDate}>Новомученики на {currentDate}</p>
        </header>
    );
};
