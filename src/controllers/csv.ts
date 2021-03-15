import { MongoClient } from 'mongodb';
import * as csv from 'csvtojson';
import Car from '../models/Car'
import MongoDB from "../db/MongoDB"

export const postCSV = async (req) => {
  try {
    const providerName = req.body?.providerName
    const { uri } = await MongoDB();
    const client = new MongoClient(uri);
    await client.connect();

    let cars = await csv().fromString(req.files?.csvFile?.data?.toString())
    cars = cars.map((car) => {
      return new Car(car).getValues();
    })

    const database = client.db('node_challenge');
    const carsCollection = database.collection('cars');

    carsCollection.insertOne({providerName, cars})

    await carsCollection.find({}).forEach((m) => {
      console.log(m);
    });

    return {providerName, cars}
    
  } catch (error) {
    console.log(error)
  }
  
}



