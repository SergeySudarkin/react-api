import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import cls from "./PreviewCard.module.css";

export const PreviewCard = ({ card }) => {
    const navigate = useNavigate();

    return (
        <div className={cls.card}>
            <h5 className={cls.cardTitle}>{card["ФИО"]}</h5>
            <div className={cls.cardShortInfo}>
                <p className={cls.cardText}>
                    <strong>Церковный сан:</strong> {card["сан_церк_служение"]}
                </p>
                <p className={cls.cardText}>
                    <strong>Информация о рождении:</strong> {card["Рождение"]["датировка"]}. <br /> {card["Рождение"]["текст"]}
                </p>
                <p className={cls.cardText}>
                    <strong>Информация о кончине:</strong> {card["Кончина"]["датировка"]}. <br /> {card["Кончина"]["текст"]}
                </p>
            </div>
            <Button onClick={() => navigate(`/card/${card["Номер"]}`)}>Подробнее</Button>
        </div>
    );
};
