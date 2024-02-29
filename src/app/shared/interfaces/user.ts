import { Adresse } from "./adresse";
import { Commentaire } from "./commentaire";
import { Groupe } from "./groupe";
import { Publication } from "./publication";

export interface User {
   /*   id       Int      @id @default(autoincrement())
  nom      String
  prenom   String
  email    String   @unique
  mdp      String
  age      Int
  adresses Adresse[]
  publications Publication[]
  commentaires Commentaire[]
  groupes Groupe[]
  */
 // generate user interface from prisma schema above
    id: number;
    nom: string;
    prenom: string;
    email: string;
    mdp: string;
    age: number;
    adresses: Adresse[];
    publications: Publication[];
    commentaires: Commentaire[];
    groupes: Groupe[];
    // add more fields as needed
}
