import Image from "next/image";
import styles from "./page.module.css";
import { Button, Center, ChakraProvider } from "@chakra-ui/react";
import InputDataWrapper from "./components/InputDataWrapper";

export default function Home() {
  return (
    <ChakraProvider>
      <Center
      // bg="tomato" h="100px" color="white"
      >
        <InputDataWrapper />
      </Center>
    </ChakraProvider>
  );
}
