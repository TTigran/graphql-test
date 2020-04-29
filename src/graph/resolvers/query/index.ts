import { Author } from '../../../@types/model/author';
import { getModel } from '../../../db';

export const getAuthors = async (): Promise<Author[]> => {
    try {
        const model = await getModel();
        return  model.Author.find();
    }catch (e) {
        console.error(e.message);
    }
};

export const getAuthor = async (id: any, name: string): Promise<Author> => {
    console.log(id,name);
    try {
        const model = await getModel();
        return  model.Author.findOne({ id });
    }catch (e) {
        console.log(e.massage);
    }
};

export const hello =  async () => {
    return 'Hello GraphQL!';
};
