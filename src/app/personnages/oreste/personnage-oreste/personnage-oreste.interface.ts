export interface PersonnageOreste {
  id: string;
  image: string;
  joueur: string;
  nom: string;
  prenom: string;
  age: number;
  sexe: string;
  taille: number;
  profession: string;
  niveau: number;
  classe_de_combat: string;
  grade: string;
  esprit: number;
  intelligence: number;
  corps: number;
  artsEtLettres: number;
  codeEtProgrammation: number;
  elocution: number;
  perception: number;
  physiqueEtMathematiques: number;
  psychologie: number;
  cultureElfhaym: number;
  cultureFallen: number;
  cultureKhrone: number;
  cultureSolarienne: number;
  astronavigation: number;
  discretion: number;
  genieHighTech: number;
  medecineEtBiologie: number;
  pilotage: number;
  systemesDeSecurite: number;
  technologieElfhaym: number;
  technologieFallen: number;
  technologieKrhone: number;
  technologieSolarienne: number;
  acrobatie: number;
  apesanteur: number;
  athletisme: number;
  conduite: number;
  intimidation: number;
  seduction: number;
  sociologieElfhaym: number;
  sociologieFallen: number;
  sociologieKrhone: number;
  sociologieSolarienne: number;
  artillerie: number;
  canonsCourts: number;
  canonsLourds: number;
  canonsLongs: number;
  lames: number;
  resilience: number;
  sensDuCombat: number;
  armePrincipale: string;
  armeSecondaire: string;
  armure: string;
  bouclierDeflecteur: string;
  pouvoirs: string[];
  modArmure: string[];

}

export interface PersonnageOrestSource {
  source: PersonnageOreste;
}
