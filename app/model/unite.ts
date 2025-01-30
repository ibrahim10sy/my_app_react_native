import { Acteur } from "./acteur";

export interface Unite {
    idUnite?: string;
    codeUnite?: string;
    nomUnite?: string;
    sigleUnite?: string;
    description?: string;
    dateAjout?: string;
    dateModif?: string;
    statutUnite?: boolean;
    personneModif?: string;
    acteur?: Acteur;
  }