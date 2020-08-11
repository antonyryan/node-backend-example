import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    companyName!: string;

    @Column({ type: 'varchar', nullable: true })
    fantasyName: string | undefined;

    @Column()
    cnpj!: string;

    @Column('date')
    creationDate!: Date;
}
