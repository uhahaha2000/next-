import "../styles/Home.scss";
import Head from "next/head";
import React, { useState, useEffect, useRef, ChangeEvent } from "react";

interface TextAreaProps {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export default function Home(props: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fakeInputRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState<String>("입력해주세요.");

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const fakeInputHeight = fakeInputRef.current?.clientHeight;

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = fakeInputHeight + "px";
      const scrollHeight = textareaRef.current.scrollHeight;

      textareaRef.current.style.height = scrollHeight + "px";
    }
    console.log(
      textareaRef.current?.scrollHeight,
      textareaRef.current?.clientHeight
    );
  }, [value]);

  const handleBlur = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = fakeInputHeight + "px";
    }
    console.log(
      textareaRef.current?.scrollHeight,
      textareaRef.current?.clientHeight
    );
  };

  const handleFocus = () => {
    if (textareaRef && textareaRef.current) {
      if (
        textareaRef.current.scrollHeight >
        textareaRef.current.clientHeight + 3
      ) {
        textareaRef.current.style.height =
          textareaRef.current.scrollHeight + "px";
      }
    }
    console.log(
      textareaRef.current?.scrollHeight,
      textareaRef.current?.style.lineHeight
    );
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrap">
        <div className="scroll">
          <div className="inner">
            가나다라마바<a href="https://nextjs.org"></a>
          </div>
        </div>

        <div className="user_enter_wrap">
          <div className="typing_wrap">
            <button className="btn_menu" type="button">
              버튼
            </button>
            <div className="chat_input_wrap">
              <div className="chat_input_inner">
                <textarea
                  className="chat_input"
                  autoComplete="off"
                  placeholder="입력해주세요."
                  ref={textareaRef}
                  onChange={textAreaChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                ></textarea>
                <div
                  className={
                    "fake_input" + (value === "" ? " placeholder" : "")
                  }
                  ref={fakeInputRef}
                >
                  {value ? value : "입력해주세요."}
                </div>
              </div>
              <button className="btn_send" disabled></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
