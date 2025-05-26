import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { PreviewCardList } from "../../components/PreviewCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [searchValue, setSearchValue] = useState("");

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

    const onSearchChangeHandler = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <h1 className={cls.homeTitle}>Новомученики и Исповедники</h1>

            <input type="text" value={searchValue} onChange={onSearchChangeHandler} />

            {isLoading && <Loader />}
            {error && <p>{error}</p>}

            <PreviewCardList cards={cards} />
        </>
    );
};
