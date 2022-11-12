import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { MainDatabase } from './main-db.js';
import expressSession from 'express-session';

// Session configuration
const sessionConfig = {
  // set this encryption key in Heroku config (never in GitHub)!
  secret: process.env.SECRET || 'SECRET',
  resave: false,
  saveUninitialized: false,
};

class MainServer {
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    app.use(logger('dev'));
    app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
    this.app.use(expressSession(sessionConfig));
  }
  
  async initRoutes() {
    // Note: when using arrow functions, the "this" binding is lost.
    const self = this;
    
    this.app.post('/found/create', async (req, res) => {
      try {
        const {item, description, name, email, location, today} = req.body;
        await self.db.createFound(item, description, name, email, location, today);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/found/all', async (req, res) => {
      try {
        const found = await self.db.readAllFound();
        res.send(JSON.stringify(found));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.delete('/found/delete', async (req, res) => {
      try {
        const {item, description, name, email, location} = req.body;
        await self.db.deleteFound(item, description, name, email, location);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.post('/lost/create', async (req, res) => {
      try {
        const {item, description, name, email, location, today} = req.body;
        await self.db.createLost(item, description, name, email, location, today);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/lost/all', async (req, res) => {
      try {
        const lost = await self.db.readAllLost();
        res.send(JSON.stringify(lost));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.delete('/lost/delete', async (req, res) => {
      try {
        const {item, description, name, email, location} = req.body;
        await self.db.deleteLost(item, description, name, email, location);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    //in case of error
    this.app.get('*', (req, res) => {
      res.send('Error');
    });
  }

  async initDb() {
    this.db = new MainDatabase(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 8080;
    this.app.listen(port, () => {
      console.log(`MainServer listening on port ${port}!`);
    });
  }
}

const server = new MainServer(process.env.MONGODB_URI);
server.start();