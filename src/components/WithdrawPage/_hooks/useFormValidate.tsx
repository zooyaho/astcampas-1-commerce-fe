import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export interface FormDataType {
  reason: string;
  additionalReason: string;
  requireText: string;
}

export const reasonFormSchema = yup.object().shape({
  reason: yup.string().required('탈퇴 사유를 선택해주세요.'),
  additionalReason: yup.string().nullable(),
  requireText: yup
    .string()
    .required('"탈퇴하겠습니다"를 입력해주세요.')
    .test('validate', '"탈퇴하겠습니다"를 입력해주세요.', (val) => {
      if (val !== '탈퇴하겠습니다') return false;
      return true;
    }),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(reasonFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useFormValidate;
