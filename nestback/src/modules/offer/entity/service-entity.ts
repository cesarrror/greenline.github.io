import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('service')
export class ServiceEntity {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column('text')
    description: String;

    @Column()
    image: String;

    @Column()
    create_by: String;

    @Column()
    create_dt: Date;

    @Column()
    update_by: String;

    @Column()
    update_dt: Date;

}