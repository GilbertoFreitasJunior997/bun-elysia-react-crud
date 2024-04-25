import { BASE_API_URL } from './consts';
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import axios from 'axios';

export const instance = axios.create({
  baseURL: BASE_API_URL,
});

export const apiGet = async <TData>(controller: string, url: string) =>
  (await instance.get<TData>(controller.concat('/', url)))?.data;

export const apiPost = async <TData, TBody>(controller: string, url: string, body?: TBody) =>
  (await instance.post<TData>(controller.concat('/', url), body))?.data;

export const apiPut = async <TData, TBody>(controller: string, url: string, body?: TBody) =>
  (await instance.put<TData>(controller.concat('/', url), body))?.data;

export const apiDelete = async <TData>(controller: string, url: string) =>
  (await instance.delete<TData>(controller.concat('/', url)))?.data;
