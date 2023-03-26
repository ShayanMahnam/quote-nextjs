import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

interface Props {
  quotes: Array<{ quote: string; author: string; id: number}>;
}

const Quotes: React.FC<Props> = ({ quotes }) => {
  return (
    <>
      {quotes.map((quote) => (
        <div
          key={`quote-${quote.id}`}
          className="bg-slate-400 w-11/12 md:w-2/3 mx-auto my-4 rounded-lg px-6 py-8 text-center flex flex-col justify-between md:h-auto lg:h-96"
          data-aos="fade-up"
        >
          <div className="flex flex-col mb-4">
            <FaQuoteLeft className="text-4xl text-gray-800" />
            <p className="mx-4 text-lg md:text-2xl lg:text-3xl font-medium text-gray-800">{quote.quote}</p>
            <FaQuoteRight className="text-4xl text-gray-800 self-end" />
          </div>
          <p className="text-gray-700 self-end font-medium text-lg md:text-xl">{quote.author}</p>
        </div>
      ))}
    </>
  );
};

export default Quotes;