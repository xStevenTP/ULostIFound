import 'dotenv/config';
import express from 'express';
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
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
    this.app.use(expressSession(sessionConfig));
  }
  

  async initRoutes() {
    // Note: when using arrow functions, the "this" binding is lost.
    const self = this;
    
    //route to upload pictures to the database from the user
    this.app.post('/upload', this.upload.single('upload'), async (req, res) => {
      try {
        const img = fs.readFileSync(req.file.path);
        const encode_img = img.toString('base64');
        const {email, Description} = req.body;
        await self.db.uploadPost(email, encode_img, req.file.mimetype, Description);
        res.redirect('/profile');
      } catch (err) {
        res.status(500).send(err);
      }
    });

    //route to delete an entire user, delete part of our CRUD
    this.app.delete('/user/delete', async (req, res) => {
      try {
        const {email} = req.body;
        await self.db.deleteUser(email);
        res.status(200).send();
      } catch (err) {
        res.status(500).send(err);
      }
    });

    //route to get all the posts for the feed page
    this.app.get('/post/all', async (req, res) => {
      try {
        const post = await self.db.readAllPosts();
        res.send(JSON.stringify(post));
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