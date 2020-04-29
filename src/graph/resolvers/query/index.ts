import { Author } from '../../../../@types/model/Author';
import { getAuthorData, getAuthorById } from '../../../service';

export const getAuthors = async (): Promise<Author[]> => {
    return await getAuthorData();
};
export const getAuthor = async (id: number, name: string) => {
    const ID = (JSON.parse(JSON.stringify(name)).id);
     // const ID = (name.id); why  error ?
    console.log(await getAuthorById(ID));
    return await getAuthorById(ID);
};
export const hello =  async () => {
    return 'Hello world!';
};
