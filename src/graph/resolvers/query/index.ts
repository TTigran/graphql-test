import { Author } from '../../../../@types/model/Author';
import { getAuthorData, getAuthorById } from '../../../service';

export const getAuthors = async (): Promise<Author[]> => {
    return await getAuthorData();
};
export const getAuthor = async (id: number) => {
    console.log(id);
    return await getAuthorById(2);
};
export const hello =  async () => {
    return 'Hello world!';
};
