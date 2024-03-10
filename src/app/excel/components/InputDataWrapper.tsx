"use client";
import { useState } from "react";
import styles from "./InputDataWrapper.module.css";
import ResultText from "./ResultText";
import { Button, Heading, Stack, Textarea } from "@chakra-ui/react";

const InputDataWrapper = () => {
  const [value, setValue] = useState(null);
  const [viewData, setViewData] = useState([]);

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    // const object = JSON.parse(inputValue);
    // console.log(object);
    console.log(e.target.value);
    setValue(inputValue);
  };
  const handleClick = () => {
    if (!value) return;
    const object = eval(value);

    setViewData(object as any);
  };

  return (
    <>
      <Stack w="90vw">
        <Heading>Excel-Automation</Heading>
        <Textarea
          value={value ? value : ""}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
        <Button onClick={handleClick}>결과 보기</Button>

        {value && (
          <div
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            <ResultText data={viewData} />
          </div>
        )}
        {JSON.stringify(value)}
      </Stack>
    </>
  );
};

export default InputDataWrapper;
