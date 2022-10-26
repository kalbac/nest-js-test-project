import { Injectable } from "@nestjs/common";
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "./entities/post.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostsService {

  constructor( @InjectRepository( PostEntity ) private readonly postsRepository: Repository<PostEntity>) {}

  async create(dto: CreatePostDto) : Promise<PostEntity> {
    return this.postsRepository.save(dto);
  }

  async findAll() : Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  async findOne(id: string) : Promise<PostEntity> {
    return this.postsRepository.findOne(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.update(id, updatePostDto)
  }

  remove(id: string) {
    return this.postsRepository.delete(id)
  }
}
