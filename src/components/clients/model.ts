import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column({ nullable: true })
    fantasyName: string;

    @Column()
    cnpj: string;

    @Column('date')
    creationDate: Date;
}
