import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import cls from "./PreviewCard.module.css";

export const PreviewCard = ({ card }) => {
    const navigate = useNavigate();

    return (
        <div className={cls.card} aria-label="Карточка">
            <h5 className={cls.cardTitle} aria-label="ФИО">
                {card["ФИО"]}
            </h5>
            <div className={cls.cardShortInfo} aria-label="Краткая информация карточки">
                {card["сан_церк_служение"] && (
                    <p className={cls.cardText}>
                        <strong>Церковный сан:</strong> {card["сан_церк_служение"]}
                    </p>
                )}
                {card["Рождение"] && (
                    <p className={cls.cardText}>
                        <strong>Информация о рождении:</strong> {card["Рождение"]["датировка"]}. <br />
                        {card["Рождение"]["текст"]}
                    </p>
                )}
                {card["Кончина"] && (
                    <p className={cls.cardText}>
                        <strong>Информация о кончине:</strong> {card["Кончина"]["датировка"]}. <br /> {card["Кончина"]["текст"]}
                    </p>
                )}
            </div>
            <Button onClick={() => navigate(`/card/${card["Номер"]}`)} ariaLabel="Переход на подробную информацию о карточке">
                Подробнее
            </Button>
        </div>
    );
};
