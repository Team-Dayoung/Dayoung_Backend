import { UserMajor } from 'src/common/enum/userMajor.enum';
import { UsersModel } from 'src/users/entity/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class UserMajorsModel {
  @PrimaryColumn({
    type: 'enum',
    enum: UserMajor,
  })
  major: UserMajor;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => UsersModel, (user) => user.majors)
  @JoinColumn({ name: 'userId' })
  user: UsersModel;
}
