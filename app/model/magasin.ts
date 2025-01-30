import { Acteur } from "./acteur";

export interface Magasin {
    idMagasin?: string;
    codeMagasin?: string;
    nomMagasin?: string;
    latitude?: string;
    longitude?: string;
    localiteMagasin?: string;
    contactMagasin?: string;
    personneModif?: string;
    statutMagasin?: boolean;
    dateAjout?: string;
    dateModif?: string;
    photo?: string;
    nbreView?: number;
    pays?: string;
    acteur?: Acteur;
  }