import cls from "./Button.module.css";

export const Button = ({ onClick, isActive, isDisabled, ariaLabel, children }) => {
    return (
        <button
            className={`${cls.btn} ${isActive ? cls.active : ""}`}
            onClick={onClick}
            disabled={isDisabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};
