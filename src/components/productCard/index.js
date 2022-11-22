import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Button,
} from "@chakra-ui/react";
import CurrencyFormat from "react-currency-format";

import { RiAddFill } from "react-icons/ri";
export default function ProductCard({ image, name, price, descr }) {
  return (
    <Box
      maxW="98%"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"xl"}
      rounded={"xl"}
      border="1px solid #E9E9E9;"
      p={["12px", 8]}
      overflow={"hidden"}
    >
      <VStack alignItems={"start"} textAlign={"left"}>
        <Image
          rounded={"xl"}
          border="1px solid #E9E9E9;"
          src={image}
          w="100%"
          h={"40%"}
        />
        <Text
          textTransform={"uppercase"}
          fontWeight={900}
          fontSize={["xl", "3xl"]}
          letterSpacing={1.1}
        >
          {name}
        </Text>
        <Heading color={"primary"} fontSize={["xl", "2xl"]} fontFamily={"body"}>
          <CurrencyFormat
            value={price}
            displayType={"text"}
            suffix=" sum"
            thousandSeparator={true}
          />
        </Heading>
        <Text for w={"100%"} noOfLines={3} color={"gray.500"}>
          {descr}
        </Text>
        <Box display={"flex"} justifyContent="center" w={"100%"}>
          <ButtonGroup size="md" colorScheme={"blue"} isAttached>
            <IconButton
              background={"#FFBC72"}
              color="white"
              fontWeight={600}
              aria-label="Remove"
              icon={<RiAddFill fontSize={"2rem"} />}
            />
            <Button background={"primary"} fontWeight="400" color="white">
              Tanlash
            </Button>
            <IconButton
              aria-label="Add to friends"
              background={"#FFBC72"}
              color="white"
              fontWeight={600}
              icon={<RiAddFill fontSize={"2rem"} />}
            />
          </ButtonGroup>
        </Box>
      </VStack>
    </Box>
  );
}
