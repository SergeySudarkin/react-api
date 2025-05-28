import { useNavigate, useParams } from "react-router-dom";
import cls from "./CardPage.module.css";
import { Button } from "../../components/Button";
import { NotFoundPage } from "../NotFoundPage";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";

export const CardPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [card, setCard] = useState(null);

    const [fetchCard, isCardLoading] = useFetch(async () => {
        const response = await fetch(API_URL);
        const cardsObject = await response.json();
        const cards = cardsObject.items;
        const [card] = cards.filter((card) => card["Номер"] === Number(id));

        setCard(card);
    });

    useEffect(() => {
        fetchCard();
    }, []);

    return (
        <>
            {isCardLoading ? (
                <Loader />
            ) : card === null ? (
                <NotFoundPage />
            ) : (
                <div className={cls.container}>
                    <h5 className={cls.cardTitle}>{card["ФИО"]}</h5>
                    <div className={cls.cardInfo}>
                        {card["сан_церк_служение"] && (
                            <p className={cls.cardText}>
                                <strong>Церковный сан:</strong> {card["сан_церк_служение"]}
                            </p>
                        )}

                        {card["Рождение"] && (
                            <p className={cls.cardText}>
                                <strong>Информация о рождении:</strong> {card["Рождение"]["датировка"]}. <br />{" "}
                                {card["Рождение"]["текст"]}
                            </p>
                        )}

                        {card["События"] && (
                            <ul className={cls.cardEvents}>
                                <strong className={cls.cardText}>События:</strong>
                                {card["События"].map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <strong>{item["датировка"] && `${item["датировка"]}:`} </strong> {item["текст"]}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {card["Кончина"] && (
                            <p className={cls.cardText}>
                                <strong>Информация о кончине:</strong> {card["Кончина"]["датировка"]}. <br />{" "}
                                {card["Кончина"]["текст"]}
                            </p>
                        )}
                    </div>

                    {card["Фотографии"] && (
                        <img
                            className={cls.cardImg}
                            src={card["Фотографии"][0]["сжатое_фото_file_id"]}
                            alt={card["Фотографии"][0]["подпись"]}
                        />
                    )}

                    <Button onClick={() => navigate("/")}>Назад</Button>
                </div>
            )}
        </>
    );
};
