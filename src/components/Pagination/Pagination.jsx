import { Button } from "../Button";
import cls from "./Pagination.module.css";

export const Pagination = ({ pagination, onClick, currentPage }) => {
    return (
        <div className={cls.paginationContainer} onClick={onClick} aria-label="Номера страниц">
            {pagination.map((value) => {
                return (
                    <Button key={value} isActive={value === currentPage} ariaLabel="Номер страницы">
                        {value}
                    </Button>
                );
            })}
        </div>
    );
};
