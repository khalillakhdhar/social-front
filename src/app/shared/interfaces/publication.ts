export interface Publication {
/*
  id          Int          @id @default(autoincrement())
  text        String
  publieurId  Int
  publieur    User         @relation(fields: [publieurId], references: [id])
  commentaires Commentaire[]
  // date avec date heure par defaut
  date        DateTime     @default(now())
*/
    // generate publication interface from prisma schema above
    id: number;
    text: string;
    publieurId: number;
    publieur: any;
    commentaires: any[];
    date: Date;
    // add more fields as needed


}

