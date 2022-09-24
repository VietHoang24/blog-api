import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Author } from '../../authors/schemas/authors.schema';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {

  @Prop({required:true})
  title: string;
  @Prop({required:true})
  content: string;
  @Prop()
  image: string[];
  @Prop()
  author: Author;
  @Prop()
  tag: string[];
  @Prop()
  daft: boolean;
  @Prop({required:true})
  sumary: string;
  @Prop()
  slug: string;
  @Prop({required:true})
  date: Date;
  @Prop()
  comments: [
    {
      _id: {
        type: ObjectId;
        ref: 'Authors';
      };
      firstname: string;
      lastname: string;
      data: string;
    },
  ];
  @Prop()
  publishStatus: string;
  @Prop()
  publishDate: string;
  @Prop()
  publishDateTimeStamp: Date;
  @Prop()
  createDateTimeStamp: Date;
  @Prop()
  updateDate: string;
  @Prop()
  updateDateTimeStamp: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
