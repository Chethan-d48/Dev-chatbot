import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const Contextprovider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    const finalPrompt = prompt || input;

    if (!finalPrompt.trim() || loading) return;

    try {
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(finalPrompt);
      setPrevPrompts((prev) => [...prev, finalPrompt]);
      setResultData("");
      setPrevPrompts((prev) => [...prev, finalPrompt]);

      const response = await runChat(finalPrompt);

      const responseArray = response.split(" ");
      for (let i = 0; i < responseArray.length; i++) {
        const nextWord = responseArray[i] + " ";
        delayPara(i, nextWord);
      }
    } catch (error) {
      console.error("Error:", error);
      setResultData("Something went wrong.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setInput("");
      }, 75 * (resultData.split(" ").length || 20));
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default Contextprovider;