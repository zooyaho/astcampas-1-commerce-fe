import instance from '@apis/_axios/instance';

import { loadTossPayments } from '@tosspayments/payment-sdk';

import { Order, OrderStatus } from './OrderApi.type';

export async function tossPayments(clientKey: string) {
  const tossPayments = await loadTossPayments(clientKey);
  return tossPayments;
}
export async function getOrderList() {
  const { data } = await instance('/v1/order/');
  console.log(data);
  return data;
}
export async function postOrder(body: Partial<Order>) {
  const { data } = await instance({
    method: 'POST',
    url: '/v1/order/',
    data: body,
  });
  return data;
}
export async function getOrder(id: string) {
  const { data } = await instance(`/v1/order/${id}/`);
  return data;
}
export async function putOrder(id: number, body: Partial<Order>) {
  const { data } = await instance({
    method: 'PUT',
    url: `/v1/order/${id}/`,
    data: body,
  });
  return data;
}
export async function getOrderStatus(id: number) {
  const { data } = await instance({
    method: 'GET',
    url: `/v1/order/status/`,
    params: { order_id: id },
  });
  return data;
}
export async function postOrderStatus(body: OrderStatus) {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/order/status/`,
    data: body,
  });
  return data;
}
export async function putOrderStatus(orderId: string, body: Partial<Order>) {
  const { data } = await instance({
    method: 'PUT',
    url: `/v1/order/status/${orderId}/`,
    data: body,
  });
  return data;
}
