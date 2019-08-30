import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonnageOreste } from '../personnage-oreste/personnage-oreste.interface';
import { Arme } from 'src/app/equipement/orest/arme.interface';
import { Armures, ArmureSource } from 'src/app/equipement/orest/armures.interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { PouvoirSource, Pouvoir } from 'src/app/equipement/orest/pouvoir.interface';
import { Mods, ModsSources } from 'src/app/equipement/orest/mods.interface';
import { Bouclier, BouclierSource } from 'src/app/equipement/orest/bouclier.interface';




@Component({
  selector: 'app-creation-perso-oreste',
  templateUrl: './creation-perso-oreste.component.html',
  styleUrls: ['./creation-perso-oreste.component.scss']
})
export class CreationPersoOresteComponent implements OnInit {

  personnage: PersonnageOreste;
  arme1: Arme;
  arme2: Arme;
  isArme: number;
  armure: Armures;
  pouvoir: Pouvoir;
  mods: Mods;
  bouclier: Bouclier;
  pouvoirList: Pouvoir[] = [];
  modsList: Mods[] = [];
  armuresSources: ArmureSource[];
  pouvoirSources: PouvoirSource[];
  modsSources: ModsSources[];
  bouclierSources: BouclierSource[];


  creationForm: FormGroup;
  constructor(private es: ElasticService) {
    this.creationForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sexe: new FormControl('', Validators.required),
      taille: new FormControl('', Validators.required),
      classe_de_combat: new FormControl('', Validators.required),
      grade: new FormControl('', Validators.required),
      intelligence: new FormControl('', Validators.required),
      esprit: new FormControl('', Validators.required),
      corps: new FormControl('', Validators.required),
      artsEtLettres: new FormControl('', Validators.required),
      codeEtProgrammation: new FormControl('', Validators.required),
      elocution: new FormControl('', Validators.required),
      perception: new FormControl('', Validators.required),
      physiqueEtMathematiques: new FormControl('', Validators.required),
      psychologie: new FormControl('', Validators.required),
      cultureElfhaym: new FormControl('', Validators.required),
      cultureFallen: new FormControl('', Validators.required),
      cultureKrhone: new FormControl('', Validators.required),
      cultureSolarienne: new FormControl('', Validators.required),
      astronavigation: new FormControl('', Validators.required),
      genieHighTech: new FormControl('', Validators.required),
      pilotage: new FormControl('', Validators.required),
      technologieElfhaym: new FormControl('', Validators.required),
      technologieKrhone: new FormControl('', Validators.required),
      discrétion: new FormControl('', Validators.required),
      medecineEtBiologie: new FormControl('', Validators.required),
      systemesDeSecurité: new FormControl('', Validators.required),
      technologieFallen: new FormControl('', Validators.required),
      technologieSolarienne: new FormControl('', Validators.required),
      acrobatie: new FormControl('', Validators.required),
      apesanteur: new FormControl('', Validators.required),
      athletisme: new FormControl('', Validators.required),
      conduite: new FormControl('', Validators.required),
      intimidation: new FormControl('', Validators.required),
      seduction: new FormControl('', Validators.required),
      sociologieElfhaym: new FormControl('', Validators.required),
      sociologieFallen: new FormControl('', Validators.required),
      sociologieKrhone: new FormControl('', Validators.required),
      sociologieSolarienne: new FormControl('', Validators.required),
      artillerie: new FormControl('', Validators.required),
      canonsCourts: new FormControl('', Validators.required),
      canonsLongs: new FormControl('', Validators.required),
      canonsLourds: new FormControl('', Validators.required),
      lames: new FormControl('', Validators.required),
      resilence: new FormControl('', Validators.required),
      sensDuCombat: new FormControl('', Validators.required),





    });
  }

  ngOnInit() {
  }

  getSelectedArme1(arme: Arme) {
    if (this.isArme === 1) {
      this.arme1 = arme;
    }

    if (this.isArme === 2) {
      this.arme2 = arme;
    }

  }

  getSelectedArmure(armure: Armures) {
    this.armure = armure;
  }

  getSelectedPouvoir(pouvoir: Pouvoir) {
    this.pouvoir = pouvoir;
    this.pouvoirList.push(this.pouvoir);
  }

  getSelectedMod(mod: Mods) {
    this.mods = mod;
    this.modsList.push(this.mods);
  }

  getSelectedBouclier(bouclier: Bouclier) {
    this.bouclier = bouclier;
  }

  GetAllArmues() {
    this.es.getByType('equipement-oreste', 'armures')
      .then(response => {
        this.armuresSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  GetAllBouclier() {
    this.es.getByType('equipement-oreste', 'bouclier')
      .then(response => {
        this.bouclierSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  GetAllMods() {
    this.es.getByType('equipement-oreste', 'module')
      .then(response => {
        this.modsSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  GetAllPouvoir() {
    this.es.getByType('equipement-oreste', 'pouvoir')
      .then(response => {
        this.pouvoirSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }


  suppPouvoir(pouvoir: Pouvoir) {
    const index: number = this.pouvoirList.indexOf(pouvoir);
    this.pouvoirList.splice(index, 1);
  }

  suppMods(mod: Mods) {
    const index: number = this.modsList.indexOf(mod);
    this.modsList.splice(index, 1);
  }



  onSubmit(value) {
    const modIdList: string[] = [];
    const pouvoirIdList: string[] = [];
    if (value.nom === '' || value.image === '') {
      console.log('test');
    } else {

      this.modsList.forEach(mod => {
        modIdList.push(mod.id);
      });

      this.pouvoirList.forEach(pouvoir => {
        pouvoirIdList.push(pouvoir.id);
      });

      this.es.createDoc({
        index: 'personnages-oreste',
        id: localStorage.getItem('current_Game') +  localStorage.getItem('current_player') + value.nom,
        body: {
          id: localStorage.getItem('current_Game').toLocaleLowerCase() +
          localStorage.getItem('current_player').toLocaleLowerCase() + value.nom.toLocaleLowerCase(),
          joueur: localStorage.getItem('current_player'),
          nom: value.nom,
          image: value.image,
          prenom: value.prenom,
          age: value.age,
          sexe: value.sexe,
          taille: value.taille,
          classe_de_combat: value.classe_de_combat,
          grade: value.grade,
          intelligence: value.intelligence,
          esprit: value.esprit,
          corps: value.corps,
          artsEtLettres: value.artsEtLettres,
          codeEtProgrammation: value.codeEtProgrammation,
          elocution: value.elocution,
          perception: value.perception,
          physiqueEtMathematiques: value.physiqueEtMathematiques,
          psychologie: value.psychologie,
          cultureElfhaym: value.cultureElfhaym,
          cultureFallen: value.cultureFallen,
          cultureKhrone: value.cultureKrhone,
          cultureSolarienne: value.cultureSolarienne,
          astronavigation: value.astronavigation,
          genieHighTech: value.genieHighTech,
          pilotage: value.pilotage,
          technologieElfhaym: value.technologieElfhaym,
          technologieKrhone: value.technologieKrhone,
          discretion: value.discrétion,
          medecineEtBiologie: value.medecineEtBiologie,
          systemesDeSecurite: value.systemesDeSecurité,
          technologieFallen: value.technologieFallen,
          technologieSolarienne: value.technologieSolarienne,
          acrobatie: value.acrobatie,
          apesanteur: value.apesanteur,
          athletisme: value.athletisme,
          conduite: value.conduite,
          intimidation: value.intimidation,
          seduction: value.seduction,
          sociologieElfhaym: value.sociologieElfhaym,
          sociologieFallen: value.sociologieFallen,
          sociologieKrhone: value.sociologieKrhone,
          sociologieSolarienne: value.sociologieSolarienne,
          artillerie: value.artillerie,
          canonsCourts: value.canonsCourts,
          canonsLongs: value.canonsLongs,
          canonsLourds: value.canonsLourds,
          lames: value.lames,
          resilience: value.resilence,
          sensDuCombat: value.sensDuCombat,
          armePrincipale: this.arme1.id,
          armeSecondaire: this.arme2.id,
          armure: this.armure.id,
          bouclierDeflecteur: this.bouclier.id,
          modArmure: modIdList,
          pouvoirs: pouvoirIdList,
        }
      }).then((result) => {
        console.log(result);
        window.location.reload();
      }, error => {
        console.error(error);
      });
      setTimeout(() => {
        this.CreateInventaire(value);
      }, 100);

    }
  }

  CreateInventaire(value) {
    this.es.createDoc({
      index: 'inventaire',
      id: localStorage.getItem('current_Game') +  localStorage.getItem('current_player') + value.nom,
      body: {
        personnage: localStorage.getItem('current_Game') +  localStorage.getItem('current_player') + value.nom,
        objet: '',
        argent: 0,
      }
    }).then((result) => {
      console.log(result);
      window.location.reload();
    }, error => {
      console.error(error);
    });
  }


}


