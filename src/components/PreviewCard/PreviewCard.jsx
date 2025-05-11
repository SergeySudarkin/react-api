import { Button } from "../Button";
import cls from "./PreviewCard.module.css";

export const PreviewCard = () => {
    return (
        <div className={cls.card}>
            <h5 className={cls.cardTitle}>Who</h5>
            <div className={cls.cardShortInfo}>
                <p className={cls.cardText}>Lorem, ipsum.</p>
                <p className={cls.cardText}>Lorem, ipsum.</p>
                <p className={cls.cardText}>Lorem, ipsum.</p>
            </div>
            <Button onClick={() => { }}>Подробнее</Button>
        </div>
    );
};
