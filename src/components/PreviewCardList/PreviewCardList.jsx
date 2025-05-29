import { memo } from "react";
import { PreviewCard } from "../PreviewCard";
import cls from "./PreviewCardList.module.css";

export const PreviewCardList = memo(({ cards }) => {
    return (
        <div className={cls.cardList} aria-label="Список карточек">
            {cards.map((card) => {
                return <PreviewCard card={card} key={card["Номер"]} />;
            })}
        </div>
    );
});
