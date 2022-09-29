import { ObjectId } from "mongoose";
import { Author } from "src/authors/schemas/authors.schema";
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateArticleDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    content: string;
    tag?: string[];
    image?: string[];
    author?: Author;
    daft?: boolean;
    @IsNotEmpty()
    sumary: string;
    slug?: string;
    date: Date;
    comments?: [
      {
        _id: {
          type: ObjectId;
          ref: 'Authors';
        };
        firstname: string;
        lastname: string;
        data: string;
        isDisplay: boolean;
      },
    ];
    publishStatus?: string;
    publishDate?: string;
    publishDateTimeStamp?: Date;
    createDateTimeStamp?: Date;
    updateDate?: string;
    updateDateTimeStamp?: Date;
}
