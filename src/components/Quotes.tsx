
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

interface Props {
  quotes: Array<{ quote: string; author: string }>;
}

class Quotes extends React.Component<Props> {
  render() {
    const { quotes } = this.props;

    return (
      <>
        {quotes.map((quote, index) => (
          <div
            key={`quote-${index}`}
            className="bg-slate-400 flex-row w-10/12 p-20 rounded-lg md:w-1/2 mt-5"
          >
            <div className="text-3xl pb-3 flex justify-start">
              <FaQuoteLeft />
            </div>
            <div
              id="text"
              className="px-10 text-center text-2xl md:text-3xl lg:text-4xl"
            >
              <p>{quote.quote}</p>
            </div>
            <div className="text-3xl pt-3 flex justify-end">
              <FaQuoteRight />
            </div>
            <div
              id="author"
              className="flex justify-end py-5 text-lg md:text-xl "
            >
              <p className="font-medium">{quote.author}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Quotes;
