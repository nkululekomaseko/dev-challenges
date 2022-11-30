import styles from "../styles/QuoteCard.module.css";

const QuoteCard = (props: { text: string }): JSX.Element => {
  return (
    <>
      <div className={styles.quote_card__container}>
        <div className={styles.quote_card__left_bar}></div>
        <p className={styles.quote_card__text}>{props.text}</p>
      </div>
    </>
  );
};

export default QuoteCard;
