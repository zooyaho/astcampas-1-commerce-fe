import { useRouter } from 'next/router';
import React from 'react';

import { AxiosError } from 'axios';

import { useBoolean, useToast } from '@chakra-ui/react';

import { postUserRegister } from '@apis/user/userApi';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { ROUTES } from '@constants/routes';
import { setToken } from '@utils/localStorage/token';

import SignupPageView from './SignUpPage.view';
import useFormValidate from './_hooks/useSignupValidate';

const SignUpPage = () => {
  const { query, push } = useRouter();
  const formData = useFormValidate();
  const { handleSubmit, reset } = formData;
  const toast = useToast();
  const [isMarketingAgreeFlag, setMarketingAgreeFlag] = useBoolean();

  const onSubmit = handleSubmit(
    ({ username, nickname, email, phone, gender, age }) => {
      postUserRegister({
        socialToken: query.token,
        name: username,
        nickname,
        email,
        phone,
        gender,
        age,
        profilePath: 'www.naver.com',
        marketingAdAgree: isMarketingAgreeFlag,
      })
        .then((data) => {
          setToken(data);
          push({
            pathname: ROUTES.SIGN_UP_DONE,
            query: {
              access: data.access,
            },
          });
        })
        .catch((error) => {
          const { response } = error as unknown as AxiosError;
          if (response) {
            if (response.status.toString().slice(0, 1) === '4')
              toast({
                title: response,
                description: '재시도 부탁드립니다.',
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
            else if (response.status.toString().slice(0, 1) === '5')
              toast({
                title: response,
                description: '서버가 불안정합니다. 재시도 부탁드립니다.',
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
          }
        });
      reset();
    },
  );

  return (
    <>
      <SignupPageView
        formData={formData}
        onSubmit={onSubmit}
        isMarketingAgreeFlag={isMarketingAgreeFlag}
        setMarketingAgreeFlag={setMarketingAgreeFlag}
      />
      {!query.token && <AuthRouteModal authStatus={AUTH_STATUS.LOGIN} />}
    </>
  );
};

export default SignUpPage;
