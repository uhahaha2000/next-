import "../styles/Home.scss";
import Head from "next/head";
import { useState, ChangeEvent } from "react";

interface TextAreaProps {
  onInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Home(props: TextAreaProps) {
  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });
  const resizeTextarea = (e) => {
    const { scrollHeight, clientHeight, value } = e.target;

    // 줄바꿈이 일어날 때
    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    // 텍스트 지워서 줄바꿈 지점에 도달했을 때
    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };
  const onKeyEnter = (e) => {
    if (e.code === "Enter") {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [5]: true },
      }));
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrap">
        <div className="head">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </div>
        <div className="scroll">
          <div className="inner">가나다라마바</div>
        </div>

        <div className="user_space_wrap">
          <div className="recommends_question_wrap opened">
            {/* opened */}
            <div className="recommend_list_wrap">
              여기는 링크리스트 나오는 부분~~~ 여기는 링크리스트 나오는 부분~~~
              여기는 링크리스트 나오는 부분~~~ 여기는 링크리스트 나오는 부분~~~
              여기는 링크리스트 나오는 부분~~~ 여기는 링크리스트 나오는 부분~~~
              여기는 링크리스트 나오는 부분~~~
            </div>
          </div>
          <div className="typing_wrap">
            <button className="btn_recommends" type="button">
              버튼
            </button>
            <div className="chat_input_wrap">
              <div className="chat_input_inner">
                <div className="fake_input"></div>
                <textarea
                  className="chat_input"
                  placeholder="검색해보세요."
                  autoComplete="off"
                  onInput={resizeTextarea}
                  onKeyDown={onKeyEnter}
                  rows={textareaHeight.row}
                ></textarea>
              </div>
              <button className="btn_send" disabled></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
