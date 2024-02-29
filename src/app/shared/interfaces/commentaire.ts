import { Publication } from "./publication";
import { User } from "./user";

export interface Commentaire {
    /*
      id           Int        @id @default(autoincrement())
  text         String
  publieurId   Int
  publieur     User       @relation(fields: [publieurId], references: [id])
  publicationId Int
  publication  Publication @relation(fields: [publicationId], references: [id])
  date        DateTime     @default(now())
    */
    // generate commentaire interface from prisma schema above
    id: number;
    text: string;
    publieurId: number;
    publieur: User;
    publicationId: number;
    publication: Publication;
    date: Date;

}
