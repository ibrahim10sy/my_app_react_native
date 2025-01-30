import { Speculation } from "./speculation";

export interface Acteur {
    idActeur?: string;
    resetToken?: string;
    tokenCreationDate?: string;
    codeActeur?: string;
    nomActeur?: string;
    adresseActeur?: string;
    telephoneActeur?: string;
    whatsAppActeur?: string;
    latitude?: string;
    longitude?: string;
    photoSiegeActeur?: string;
    logoActeur?: string;
    niveau3PaysActeur?: string;
    password?: string;
    dateAjout?: string;
    dateModif?: string;
    personneModif?: string;
    localiteActeur?: string;
    emailActeur?: string;
    statutActeur?: boolean;
    isConnected?: boolean;
    speculation?: Speculation[];
  }
  