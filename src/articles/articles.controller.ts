import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create({...createArticleDto, date: new Date});
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('archive')
  archive() {
    return this.articlesService.archive();
  }

  @Get('latest')
  findLatest() {
    return this.articlesService.findLatest();
  }

  @Get('latest/:limit')
  findLatestWithLimit(@Param('limit') limit: number) {
    return this.articlesService.findLatest(limit);
  }

  @Get('detail/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.articlesService.findOneBySlug(slug);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
