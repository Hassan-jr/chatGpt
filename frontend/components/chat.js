import React, { useEffect, useState } from "react";
import Image from "next/image";
import send from "./assets/send.svg";
import User from "./User";
import Bot from "./Bot";
function chat() {
  var value = 0;
  const [answer, setAnswer] = useState('');

  const [quiz, setQuiz] = useState("");
  // dcdcdc text color

  const handlechange = (e) => {
    setQuiz((prev) => e.target.value);
  };

  const quizAnser = [
    {
      quiz: '',
      answer: '',
    }
  ]

const FetchData = async ()=>{
  const response = await fetch("https://chatgptapi.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: quiz,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
     setAnswer(()=>data.bot)
    //  console.log("THE FINAL quiz", answer);
} else {
    const err = await response.text()
    alert(err)
}
  return response
}

  const askquiz = async (e) => {
    e.preventDefault();
    const response = await FetchData().then(res=>    
    quizAnser.push({
      quiz: quiz,
      answer: answer
    }))
    console.log("The array", quizAnser);
  };

  

  return (
    <div className=" bg-[#343541] h-screen w-screen text-[#dcdcdc] flex flex-col p-5 space-y-4">
      <User quiz={quiz}/>
      <Bot answer={answer}/>
      {/* input */}
      <div className=" fixed bottom-5 w-full">
        <form
          onSubmit={askquiz}
          className="w-10/12 mx-auto bg-[#40414F] flex flex-row justify-between align-middle rounded-lg"
        >
          <textarea
            name="message"
            value={quiz}
            onChange={handlechange}
            placeholder="Ask "
            className="pl-2 rounded border-none w-11/12 bg-transparent"
          />
          <button className="w-1/12  bg-[#40414F]" type="submit">
            <Image
              src={send}
              width={30}
              height={30}
              alt="send"
              className="mx-auto bg-[#40414F]"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default chat;
