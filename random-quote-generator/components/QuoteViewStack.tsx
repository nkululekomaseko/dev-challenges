import { useState } from "react";
import QuoteCard from "./QuoteCard";

type QuoteData = {
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
};

const QuoteViewStack = (): JSX.Element => {
  const [quoteData, setQuoteData] = useState<QuoteData>(dummyQuoteData);
  return (
    <>
      <div>
        <QuoteCard text={quoteData.quoteText} />
      </div>
    </>
  );
};

const dummyQuoteData: QuoteData = {
  quoteText: `
    The first rule of any technology used in a business is that 
    automation applied to an efficient operation will magnify the efficiency. 
    The second is that automation applied to an inefficient operation will 
    magnify the inefficiency.`,
  quoteAuthor: "Bill Gates",
  quoteGenre: "Business",
};

export default QuoteViewStack;
