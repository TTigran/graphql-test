import { Author } from '../../@types/model/Author';
import { getModel }   from '../db';

const getAuthorData = async (): Promise<Author[]>  => {
 try {
   const model = await getModel();
   return await model.Author.find();
 }catch (e) {
   console.error(e.message);
 }
};

const createAuthor = async (body: string): Promise<Author> => {
 try {
   const model = await getModel();
   return await model.Author.create(body);
 }catch (e) {
   console.error(e.message);
 }
};

const getAuthorById = async (id: number) => {
 try {
     const model = await getModel();
     return await model.Author.find({ id });
 }catch (e) {
    console.log(e.massage);
 }
};

export { createAuthor, getAuthorData , getAuthorById };
