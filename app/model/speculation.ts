import { CategorieProduit } from "./categorieProduit";

export interface Speculation {
    idSpeculation?: string;
    codeSpeculation?: string;
    nomSpeculation?: string;
    descriptionSpeculation?: string;
    statutSpeculation?: boolean;
    categorieProduit?: CategorieProduit;
    dateAjout?: string;
    dateModif?: string;
    personneModif?: string;
  }