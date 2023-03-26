import Head from "next/head";
import { Inter } from "next/font/google";
import Quotes from "@/components/Quotes";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [author, setAuthor] = useState("");
  const [word, setWord] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  interface Quote {
    id: number;
    quote: string;
    author: string;
  }

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllQuotes = () => {
    axios
      .get<{ id: number; quote: string; author: string }[]>(
        `https://shayanmahnam-quote-server.glitch.me/quotes`
      )
      .then((response) => {
        console.log(response)
        const quotes = response.data.map((q) => ({
          id: q.id,
          quote: q.quote,
          author: q.author,
        }));
        setQuote(
          quotes.length > 0
            ? quotes
            : [{ id: 0, quote: "No quotes found", author: "Shayan Mahnam" }]
        );
      })
      .catch((error) => {
        setErrorMessage("Sorry, there was a problem fetching the quote(s).");
        console.log(error);
      });
  };

  const fetchQuote = () => {
    axios
      .get("https://shayanmahnam-quote-server.glitch.me/quotes/random")
      .then((response) => {
        const { id, quote, author } = response.data;
        setQuote([{ id, quote, author }]);
        setAuthor(author);
        setIsLoading(false)
      })
      .catch((error) => {
        setErrorMessage("Sorry, there was a problem fetching the quote.");
        console.log(error);
      });
  };

  const fetchQuoteByWord = (word: string) => {
    axios
      .get<{ id: number; quote: string; author: string }[]>(
        `https://shayanmahnam-quote-server.glitch.me/quotes/search?word=${word}`
      )
      .then((response) => {
        const quotes = response.data.map((q) => ({
          id: q.id,
          quote: q.quote,
          author: q.author,
        }));
        setQuote(
          quotes.length > 0 && inputValue.length > 0
            ? quotes
            : [{ id: 0, quote: "No quotes found", author: "Shayan Mahnam" }]
        );
      })
      .catch((error) => {
        setErrorMessage("Sorry, there was a problem fetching the quote(s).");
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Shayan Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col justify-start items-center gap-20 scroll-smooth">
        <h1 className="text-3xl font-bold text-center mt-5">
          Welcome to my Quotes world!
        </h1>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center flex-nowrap">
            <Button buttonText="All Quotes" onClick={()=>{
              fetchAllQuotes();
              if (inputValue) {
                setInputValue("");
                setWord("");
              }
            }}/>
            <Button
              onClick={() => {
                fetchQuote();
                if (inputValue) {
                  setInputValue("");
                  setWord("");
                }
              }}
              buttonText="New Random Quote"
            />
            <input
              className="md:w-4/12  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:outline-red-700"
              type="text"
              placeholder="Search by word"
              onChange={(e) => {
                setWord(e.target.value);
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
            <Button onClick={() => fetchQuoteByWord(word)} buttonText="" />
            <span>
              Found Quote(s): {Array.isArray(quote) ? quote.length : 1}
            </span>
          </div>

          <div>
            {isLoading ? (
              <div className="flex font-bold justify-center items-center">
                <svg
                  className="w-20"
                  version="1.1"
                  id="L4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 0 0"
                  xmlSpace="preserve"
                >
                  <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.1"
                    />
                  </circle>
                  <circle fill="#000" stroke="none" cx="26" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.2"
                    />
                  </circle>
                  <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.3"
                    />
                  </circle>
                </svg>

                <span>Data is loading</span>
              </div>
            ) : (
              <Quotes
                quotes={
                  Array.isArray(quote) ? quote : [{ id: 200, quote, author }]
                }
              />
            )}
          </div>
        </div>
        <div className="self-center justify-self-end">
          <Footer />
        </div>
      </main>
    </>
  );
}
