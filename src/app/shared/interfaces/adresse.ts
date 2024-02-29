import { User } from "./user";

export interface Adresse {
    /*
      id        Int       @id @default(autoincrement())
  pays      String
  ville     String
  codeposte String
  rue       String
  numero    String
  userId    Int
  user      User      @relation(fields: [userId], references: [id])
    */
    // generate adresse interface from prisma schema above
    id: number;
    pays: string;
    ville: string;
    codeposte: string;
    rue: string;
    numero: string;
    userId: number;
    user: User;
    
}
