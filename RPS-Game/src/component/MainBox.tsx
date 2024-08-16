import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import {Choice} from "@/App";
import defaultImage from "@/assets/img/paper.png";

type BoxProps = {
    title?: string;
    item?: Choice | null;
    result?: string | null;
    score?: number;
};

const MainBox = ({ title, item, result, score }: BoxProps) => {
    const imageSrc = item?.img || defaultImage;
    return (
        <Box className={`main-box ${result === "winner" ? "winner-box" : ""}`}>
            <Flex className="score-container">
                <Text className="score-text">Score {score}</Text>
            </Flex>
            <Text as="h1" className="main-box-title">{title}</Text>
            <Image
                src={imageSrc}
                alt="이미지"
                className="img-container"
            />
            <Text as="h2" className="main-box-result">{result}</Text>
        </Box>
    );
};

export default MainBox;
