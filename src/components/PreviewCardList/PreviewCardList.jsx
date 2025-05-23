import { PreviewCard } from "../PreviewCard";
import cls from "./PreviewCardList.module.css";

export const PreviewCardList = ({ cards }) => {
    return (
        <div className={cls.cardList}>
            {cards.map((card, index) => {
                return <PreviewCard card={card} key={index} />;
            })}
        </div>
    );
};
