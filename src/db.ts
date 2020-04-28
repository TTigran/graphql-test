import { connect } from 'mongoose';
import { AuthorModel, } from './model';
import '../env';

const mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const database: string = process.env.MONGODB_DATABASE || 'test';

export const  getModel = async () => {
    const connectionsString = [mongoUrl, database].join('/');
    try {
        await connect(connectionsString, { useNewUrlParser: true, useUnifiedTopology: true });
        const Author = AuthorModel;
        return { Author };
    }catch (e) {
        console.error(e.message);
    }
};
