import { Schema, Document, model }  from 'mongoose';

export interface IAuthor extends Document {
    id: string;
    name: string;

}

const Author: Schema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: String

});

export const AuthorModel = model<IAuthor>('Author', Author);



