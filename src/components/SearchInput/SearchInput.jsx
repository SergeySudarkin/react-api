import { useId } from "react";
import cls from "./SearchInput.module.css";
import { SearchIcon } from "../icons";

export const SearchInput = ({ value, onChange }) => {
    const inputId = useId();

    return (
        <div className={cls.inputContainer} aria-label="Строка поиска">
            <label htmlFor={inputId}>
                <SearchIcon className={cls.searchIcon} />
            </label>
            <input className={cls.input} type="text" id={inputId} value={value} onChange={onChange} placeholder="Search" />
        </div>
    );
};
