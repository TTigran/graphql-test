import { createAuthor } from '../../../service';

export const addAuthor = async (id: number, name: string) => {
    return  await createAuthor({id, name});
};

