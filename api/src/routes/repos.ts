/* eslint-disable no-console */
import { Router, Request, Response } from 'express';
import data from '../../data/repos.json';
import axios from 'axios';

const getData = () => {
  return axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);
  const results = await getData().then((resp) => {
    return resp;
  });
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!

  res.json(results);
});
