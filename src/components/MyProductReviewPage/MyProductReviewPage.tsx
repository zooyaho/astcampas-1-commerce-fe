import React from 'react';

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react';

import { useGetReviewList } from '@apis/reveiw/ReviewApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';

import PrintRatingStars from '@components/common/PrintRatingStars';

import { LAYOUT } from '@constants/layout';
import { formatDate } from '@utils/format';

import { RightArrowIcon } from 'generated/icons/MyIcons';

function MyProductReviewPage() {
  const { data: userData } = useGetUserMe();
  const { data: reviewData, isLoading } = useGetReviewList(1, 5, userData?.id);

  return (
    <>
      {isLoading || !reviewData ? (
        <Center h="100vh">
          <CircularProgress isIndeterminate color="primary.500" />
        </Center>
      ) : (
        <Box pt={LAYOUT.HEADER.HEIGHT}>
          <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
            주문내역
          </Text>
          <Box mt="3rem" mb=".5rem" fontWeight="bold" px="1rem">
            <Text>
              총&nbsp;
              <Text as="span" textColor="primary.500">
                {reviewData.count}
              </Text>
              건
            </Text>
          </Box>
          {/* s: review item */}
          {reviewData.results.map((review) => (
            <Container pt="1.5rem" key={review.id}>
              <Box as="header" mb="1.5rem" textStyle="sm">
                <Flex justifyContent="space-between">
                  <Text textStyle="ss_wb">{review.nickname}</Text>
                  <PrintRatingStars
                    rate={review.rate ? review.rate : 0}
                    starBoxSize="14px"
                  />
                </Flex>
                <Text textStyle="ss_wn_cg600">
                  {formatDate(review.created)}
                </Text>
              </Box>
              <Flex flexDirection="column" mt="1rem" mb="1.5rem">
                <Text>{review.content}</Text>
                <Flex gap=".7rem" mt=".5rem">
                  {review.reviewimageSet &&
                    review.reviewimageSet.map((img) => (
                      <Img key={img.reviewId} src={img.url} alt="리뷰 이미지" />
                    ))}
                </Flex>
              </Flex>
              <Divider />
            </Container>
          ))}
          {/* <Center>
        <Flex justifyContent="center" alignItems="center" my="3rem" w="60%">
          <Button variant="pageButton">1</Button>
          <Button variant="pageButton">2</Button>
          <Button variant="pageButton">3</Button>
          <Button variant="pageButton">4</Button>
          <Button variant="pageButton">5</Button>
          <Button variant="transparentButton">
            <RightArrowIcon boxSize="10px" ml="1rem" />
          </Button>
        </Flex>
      </Center> */}
        </Box>
      )}
    </>
  );
}

export default MyProductReviewPage;
