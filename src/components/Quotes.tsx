import axios from "axios";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

class Quotes extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { quote: "", author: "" };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice() {
    axios
      .get("https://shayanmahnam-quote-server.glitch.me/quotes/random")
      .then((response) => {
        const { quote, author } = response.data;
        this.setState({ quote, author });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { quote, author }: any = this.state;
    this.fetchAdvice = this.fetchAdvice.bind(this);

    return (
      <div className=" bg-slate-400 flex-row w-10/12 m-auto p-20 rounded-lg md:w-1/2 mt-5">
        <div className=" text-3xl pb-3 flex justify-start">
          <FaQuoteLeft />
        </div>
        <div
          id="text"
          className="px-10 text-center text-2xl md:text-3xl lg:text-4xl"
        >
          <p>{quote}</p>
        </div>
        <div className=" text-3xl pt-3 flex justify-end">
          <FaQuoteRight />
        </div>
        <div id="author" className="flex justify-end py-5 text-lg md:text-xl ">
          <p className=" font-medium ">{author}</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="font-medium">
            created by{" "}
            <a
              className="hover:underline"
              href="https://shayanmahnam.netlify.app/"
              target={"_blank"}
            >
              Shayan
            </a>
          </h4>

          <button
            id="new-quote"
            className="text-xl text-white bg-orange-400 p-2 rounded-lg font-semibold lg:bg-red-700 hover:bg-red-900"
            onClick={this.fetchAdvice}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quotes;
