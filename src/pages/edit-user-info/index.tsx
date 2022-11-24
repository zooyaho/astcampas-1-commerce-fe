import Head from 'next/head';

import EditUserInfoPage from '@components/EditUserInfoPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { getUser } from '@utils/localStorage/user';

function EditUserInfo() {
  const userInfo = getUser();
  if (!userInfo || (userInfo && userInfo.auth_status === AUTH_STATUS.LOGOUT))
    return <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />;

  return (
    <>
      <Head>
        <title>Beauty Core | edit-user-info</title>
      </Head>
      <CardLayout content={<CommonLayout content={<EditUserInfoPage />} />} />
    </>
  );
}

export default EditUserInfo;
