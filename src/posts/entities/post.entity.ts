import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from '../../users/entities/user.entity'

@Entity( 'posts' )
export class PostEntity {
  @PrimaryGeneratedColumn( 'uuid' )
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  content: string;

  @Column({ default: 'post' } )
  type: string;

  @Column({ type: 'timestamp' } )
  createdAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
