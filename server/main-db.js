import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

export class MainDatabase {
  constructor(dburl) {
    this.dburl = dburl;
    this.user = null;
  }

  async connect() {
    this.client = await MongoClient.connect(this.dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    // Get the database.
    this.db = this.client.db('ULostIFound');

    // Init the database.
    await this.init();
  }

  async init() {
    this.foundCollection = this.db.collection('Found');
    this.lostCollection = this.db.collection('Lost');
  }

  // Close the pool.
  async close() {
    this.client.close();
  }

  // create Found
  async createFound(item, description, name, email, location) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    await this.foundCollection.insertOne({item, description, name, email, location, today})
  }

  // read all found from the found collection
  async readAllFound() {
    const res = await this.foundCollection.find({}).toArray();
    return res;
  }

  async deleteFound(item, description, name, email, location) {
    await this.foundCollection.deleteOne({ item:item, description:description, name:name, email:email, location:location});
  }

  // create Lost
  async createLost(item, description, name, email, location) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    await this.lostCollection.insertOne({item, description, name, email, location, today})
  }

  // read all lost from the lost collection
  async readAllLost() {
    const res = await this.lostCollection.find({}).toArray();
    return res;
  }

  async deleteLost(item, description, name, email, location) {
    await this.lostCollection.deleteOne({ item:item, description:description, name:name, email:email, location:location });
  }

  // create a new user and add it to the user collection
  async addUser(email, realname, name, pwd) {
    if (await this.findUser(name)) {
      return false;
    }
    await this.userCollection.insertOne({name, realname, pwd, email, pictures:[], pfp:null});
    return true;
  }

  // if the user exists in the user collection
  async findUser(username) {
    const res = await this.userCollection.findOne({name:username});
    if(res != null){
      return true;
    } else {
      return false;
    }
  }

}