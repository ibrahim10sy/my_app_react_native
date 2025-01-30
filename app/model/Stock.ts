export interface Stock {
    idStock?: string;
    codeStock?: string;
    nomProduit?: string;
    formeProduit?: string;
    origineProduit?: string;
    dateProduction?: string;
    quantiteStock?: number;
    prix?: number;
    nbreView?: number;
    typeProduit?: string;
    descriptionStock?: string;
    photo?: string;
    zoneProduction?: ZoneProduction;
    dateAjout?: string;
    dateModif?: string;
    personneModif?: string;
    pays?: string;
    statutSotck?: boolean;
    speculation?: Speculation;
    unite?: Unite;
    magasin?: Magasin;
    acteur?: Acteur;
    monnaie?: Monnaie;
  }