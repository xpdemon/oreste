export interface Personnage {
  joueur: string;
  jeu: string
  image: string
  nom: string
  prenom: string
}

export interface PersonnageSouce{
  source: Personnage;
}
