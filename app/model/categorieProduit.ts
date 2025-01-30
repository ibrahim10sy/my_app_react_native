import { Filiere } from "./filiere";

export interface CategorieProduit {
    idCategorieProduit?: string;
    codeCategorie?: string;
    libelleCategorie?: string;
    descriptionCategorie?: string;
    statutCategorie?: boolean;
    dateAjout?: string;
    personneModif?: string;
    dateModif?: string;
    filiere?: Filiere;
  }