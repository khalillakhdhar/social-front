import { User } from "./user";

export interface Groupe {
    /*
    id     Int    @id @default(autoincrement())
  titre  String
  sujet  String
  membres User[]
    */
    // generate groupe interface from prisma schema above
    id: number;
    titre: string;
    sujet: string;
    membres: User[];

}
