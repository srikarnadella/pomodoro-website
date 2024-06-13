import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quoteData, setQuoteData] = useState({
    quote: "",
    author: "",
    category: "happiness", // Default category
  });

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${quoteData.category}`,
        {
          headers: {
            "X-Api-Key": "Hr61/T4yuLZFbjdfm+Cf4w==IZCgr2qNaH62eEQS",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();

      if (data && data.length > 0) {
        const { quote, author, category } = data[0];
        setQuoteData({ quote, author, category });
      } else {
        throw new Error("No quotes available for the specified category");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); // Fetch quote on initial component mount

  const handleNewQuoteClick = () => {
    fetchQuote();
  };

  return (
    <div className="quote-generator">
      <blockquote>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {quoteData.quote}
        </p>
        <footer>{quoteData.author}</footer>
      </blockquote>
      <button onClick={handleNewQuoteClick}>Generate New Quote</button>
    </div>
  );
};

export default QuoteGenerator;
