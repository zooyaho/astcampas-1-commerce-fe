import React, { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react';

import { useGetReviewList } from '@apis/reveiw/ReviewApi.query';
import { getReviewList } from '@apis/reveiw/ReviewListApi';
import { useGetUserMe } from '@apis/user/userApi.query';

import AuthRouteModal from '@components/common/AuthRouteModal';
import Pagination from '@components/common/Pagination';
import PrintRatingStars from '@components/common/PrintRatingStars';

import { AUTH_STATUS } from '@constants/authStatus';
import { LAYOUT } from '@constants/layout';
import { useQueryClient } from '@tanstack/react-query';
import { formatDate } from '@utils/format';
import { UserType, getUser } from '@utils/localStorage/user';

function MyProductReviewPage() {
  const queryClient = useQueryClient();
  const { data: userData } = useGetUserMe();
  const { data: reviewData, isLoading } = useGetReviewList(
    1,
    userData,
    userData?.id,
  );
  const [userStatus, setUserStatus] = useState<UserType | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setUserStatus(getUser());
    }
  }, []);

  const getReviewListHandler = useCallback(
    async (currentPage: number) => {
      if (userData) {
        const reviewData = await getReviewList(currentPage, userData.id);
        queryClient.setQueryData(['review-list'], reviewData);
      }
    },
    [queryClient, userData],
  );

  return (
    <>
      {!userStatus ? (
        <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />
      ) : isLoading || !reviewData ? (
        <Center h="100vh">
          <CircularProgress isIndeterminate color="primary.500" />
        </Center>
      ) : (
        <Box pt={LAYOUT.HEADER.HEIGHT}>
          <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
            내 상품 리뷰
          </Text>
          <Box mt="3rem" mb=".5rem" fontWeight="bold" px="1rem">
            <Text>
              총&nbsp;
              <Text as="strong" textStyle="sm_wb_cp">
                {reviewData.count}
              </Text>
              건
            </Text>
          </Box>
          {/* s: review item */}
          {reviewData.results.length === 0 ? (
            <Box minH="100px" py="5rem">
              <Center as="p" textStyle="sm_wb">
                ✨작성한 리뷰가 없습니다.✨
              </Center>
            </Box>
          ) : (
            reviewData.results.map((review) => (
              <>
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
                          <Img
                            key={img.reviewId}
                            src={img.url}
                            w="80px"
                            h="80px"
                            borderRadius="5px"
                            alt="리뷰 이미지"
                          />
                        ))}
                    </Flex>
                  </Flex>
                  <Divider />
                </Container>
                <Pagination
                  page={Math.ceil(reviewData.count / 5)}
                  getListHandler={getReviewListHandler}
                />
              </>
            ))
          )}
        </Box>
      )}
    </>
  );
}

export default MyProductReviewPage;
