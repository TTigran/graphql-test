import { Author } from '../../../@types/model/author';
import { getModel } from '../../../db';
import { v4 as uuidv4 } from 'uuid';

export const addAuthor = async (  name: string ) => {
    console.log(name, 'ffff');
    const id = uuidv4().toString();
    const createdData: Author = { id, name};
    try {

        const model = await getModel();
        return model.Author.create(createdData);
    }catch (e) {
        console.error(e.message);
    }
};


