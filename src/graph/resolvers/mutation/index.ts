import { Author } from '../../../@types/model/author';
import { getModel } from '../../../db';


export const addAuthor = async (root: any, {id, name}: {name: string, id: number}) => {
    console.log(name, id, 'ffff');

    const createdData: Author = { id, name};
    try {
        const model = await getModel();
        return model.Author.create(createdData);
    }catch (e) {
        console.error(e.message);
    }
};


