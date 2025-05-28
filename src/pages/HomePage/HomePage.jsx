import { useState, useEffect, useMemo, useRef } from "react";
import { API_URL, ITEMS_PER_PAGE } from "../../constants";
import cls from "./HomePage.module.css";
import { PreviewCardList } from "../../components/PreviewCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { SearchInput } from "../../components/SearchInput";
import { Pagination } from "../../components/Pagination";

export const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const homeTitleRef = useRef();

    const [getCards, isLoading, error] = useFetch(async () => {
        const response = await fetch(API_URL);
        const cardsObject = await response.json();
        const cards = cardsObject.items;

        setCards(cards);
        return cards;
    });

    const filterCards = useMemo(() => {
        return cards.filter((card) => card["ФИО"].toLowerCase().includes(searchValue.trim().toLowerCase()));
    }, [cards, searchValue]);

    const totalPages = Math.ceil(filterCards.length / ITEMS_PER_PAGE);

    const pagination = useMemo(() => {
        return Array(totalPages)
            .fill(0)
            .map((_, i) => i + 1);
    }, [filterCards]);

    const currentCards = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

        return filterCards.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filterCards, currentPage]);

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchValue]);

    const onSearchChangeHandler = (e) => {
        setSearchValue(e.target.value);
    };

    const paginationHandler = (e) => {
        if (e.target.tagName === "BUTTON") {
            setCurrentPage(Number(e.target.textContent));
            homeTitleRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <h1 className={cls.homeTitle} ref={homeTitleRef}>
                Новомученики и Исповедники
            </h1>

            <div className={cls.controlsContainer}>
                <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
            </div>

            {isLoading && <Loader />}
            {error && <p>{error}</p>}

            <PreviewCardList cards={currentCards} />

            {filterCards.length === 0 ? (
                <p className={cls.noCardsInfo}>No cards...</p>
            ) : (
                pagination.length > 1 && (
                    <Pagination pagination={pagination} onClick={paginationHandler} currentPage={currentPage} />
                )
            )}
        </>
    );
};
