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
    var status = 'found';
    console.log(item)
    await this.foundCollection.insertOne({item, description, name, email, location, today, status})
  }

  // read all found from the found collection
  async readAllFound() {
    const res = await this.foundCollection.find({}).toArray();
    return res;
  }

  async readFoundBuilding(building) {
    const res = await this.foundCollection.find({location:building}).toArray()
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
    var status = "lost";
    await this.lostCollection.insertOne({item, description, name, email, location, today, status})
  }

  // read all lost from the lost collection
  async readAllLost() {
    const res = await this.lostCollection.find({}).toArray();
    return res;
  }

  async readLostBuilding(building) {
    const res = await this.lostCollection.find({location:building}).toArray();
    return res;
  }

  async deleteLost(item, description, name, email, location) {
    await this.lostCollection.deleteOne({ item:item, description:description, name:name, email:email, location:location });
  }

}