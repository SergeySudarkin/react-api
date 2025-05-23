import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { PreviewCardList } from "../../components/PreviewCardList";

export const HomePage = () => {
    const [cards, setCards] = useState([]);

    const getCard = async () => {
        try {
            const response = await fetch(API_URL);
            const cardsObject = await response.json();
            const cards = cardsObject.items;
            setCards(cards);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getCard();
    }, []);

    return (
        <>
            <h1 className={cls.homeTitle}>Новомученики и Исповедники</h1>
            <PreviewCardList cards={cards} />
        </>
    );
};
