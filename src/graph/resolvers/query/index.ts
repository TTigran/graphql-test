import { Author } from '../../../../@types/model/Author';
import { getAuthorData, getAuthorById } from '../../../service';

export const getAuthors = async (): Promise<Author[]> => {
    return await getAuthorData();
};
export const getAuthor = async (id: string): Promise<Author> => {
    return await getAuthorById(id);
};
export const hello =  async () => {
    return 'Hello world!';
};
