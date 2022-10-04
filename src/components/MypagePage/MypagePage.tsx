import Link from 'next/link';
import React from 'react';

import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import {
  EditUserInfoIcon,
  MyProductReviewIcon,
  OrderHistoryIcon,
  RightArrowIcon,
} from 'generated/icons/MyIcons';

function MypagePage() {
  return (
    <>
      <Container pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem">
        <Text as="h2" mt="1.6rem" textStyle="sl_wb">
          박지우
        </Text>
        <Text textStyle="sm_wn" textColor="gray.400">
          incourse.run@gmail.com
        </Text>
      </Container>
      <Flex
        alignItems="center"
        py="2rem"
        borderTop="10px solid #F9F9F9"
        borderBottom="10px solid #F9F9F9"
      >
        <Box flexGrow="1">
          <Link href="edit-user-info">
            <VStack>
              <Center w="50px" h="50px">
                <EditUserInfoIcon w="41px" h="21px" color="primary.500" />
              </Center>
              <Text>회원정보수정</Text>
            </VStack>
          </Link>
        </Box>
        <Box flexGrow="1">
          <Link href="order-history">
            <VStack>
              <Center w="50px" h="50px">
                <OrderHistoryIcon w="36px" h="33px" color="primary.500" />
              </Center>
              <Text>주문내역</Text>
            </VStack>
          </Link>
        </Box>
        <Box flexGrow="1">
          <Link href="my-product-review">
            <VStack>
              <Center w="50px" h="50px">
                <MyProductReviewIcon w="28px" h="25px" color="primary.500" />
              </Center>
              <Text>내 상품 리뷰</Text>
            </VStack>
          </Link>
        </Box>
      </Flex>
      <Link href="withdraw">
        <Flex justifyContent="space-between" alignItems="center" p="1rem">
          <Text>회원탈퇴</Text>
          <RightArrowIcon viewBox="24px" />
        </Flex>
      </Link>
      <Divider />
      <Link href="intro-login">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p="1rem"
          borderBottom="30px solid #F9F9F9"
        >
          <Text>로그아웃</Text>
          <RightArrowIcon viewBox="24px" />
        </Flex>
      </Link>
      <Divider />
    </>
  );
}

export default MypagePage;
