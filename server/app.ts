import * as express from 'express';

import database from './db';
import controller from "./controller";

class App {
  public app: express.Application;
  private database: database;
  private controller: controller;

  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.database = new database();
    this.database.createConnection();
    this.controller = new controller();

    this.routes();
  }

  routes() {
    this.app.route('/').get(
      (req, res) => res.status(200).json({
        "result": "Hello World"
      }));
    this.app.route('/api/crushes').get(
      (req, res) => this.controller.select(req, res));
    this.app.route('/api/crushes').post(
      (req, res) => this.controller.insert(req, res));
    this.app.route('/api/crushes/:id').get(
      (req, res) => this.controller.selectOne(req, res));
    this.app.route('/api/crushes/:id').delete(
      (req, res) => this.controller.delete(req, res));
    this.app.route('/api/crushes/:id').put(
      (req, res) => this.controller.update(req, res));
  }
}

export default new App();