import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { PreviewCardList } from "../../components/PreviewCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
    const [cards, setCards] = useState([]);

    const [getCards, isLoading, error] = useFetch(async () => {
        const response = await fetch(API_URL);
        const cardsObject = await response.json();
        const cards = cardsObject.items;

        setCards(cards);
        return cards;
    });

    useEffect(() => {
        getCards();
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}

            <h1 className={cls.homeTitle}>Новомученики и Исповедники</h1>
            <PreviewCardList cards={cards} />
        </>
    );
};
