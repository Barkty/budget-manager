import { Accounts } from "src/accounts/entities/accounts.entity";
import { User } from "src/users/entities/users.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    department: string
    
    @Column({ type: "int" })
    january: number
    
    @Column({ type: "int" })
    february: number
    
    @Column({ type: "int" })
    march: number
    
    @Column({ type: "int" })
    april: number
    
    @Column({ type: "int" })
    may: number        
    
    @Column({ type: "int" })
    june: number
    
    @Column({ type: "int" })
    july: number
    
    @Column({ type: "int" })
    august: number
    
    @Column({ type: "int" })
    sept: number
    
    @Column({ type: "int" })
    october: number
    
    @Column({ type: "int" })
    nov : number       
    
    @Column({ type: "int" })
    december: number
    
    @Column({ type: "int" })
    estimated_budget: number
    
    @Column({ type: "int" })
    actual_budget: number
    
    @Column()
    status: string

    @Column()
    approved_by: string

    @Column()
    dept_approver: string

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToOne(() => Accounts)
    @JoinColumn()
    account: Accounts

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}