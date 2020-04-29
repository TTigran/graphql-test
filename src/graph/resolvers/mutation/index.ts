import { createAuthor, getAuthorById } from '../../../service';

export const addAuthor = async (id: number, name: string) => {
    console.log(name);
    return  await createAuthor(name);
};

export const getAuthor = async (id: number, name: string) => {
    console.log(name);
    return await getAuthorById(2);
};
