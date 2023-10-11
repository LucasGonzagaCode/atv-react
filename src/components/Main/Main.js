//Imports
import Filmes from "../Filmes/Filmes";
import Series from "../Series/Series";
import "./main.css";
//

//Icons
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
//

//Imagens
//Filmes
import KarateKid from "../../img/karateKid.png";
import IlhaDoMedo from "../../img/llhaDoMedo.png";
import GenteGrande from "../../img/GenteGrande.png";
import Avatar from "../../img/Avatar.png";

//Séries
import PeakyBlinders from "../../img/PeakyBlinders.png";
import Supernatural from "../../img/Supernatural.png";
import TheOffice from "../../img/TheOffice.png";
import Tlou from "../../img/Tlou.png";
//

const Main = () => {
  const ListF = [
    { nome: "Karate Kid", descricao: "2010", img: KarateKid },
    { nome: "Ilha do Medo", descricao: "2013", img: IlhaDoMedo },
    { nome: "Gente Grande", descricao: "2012", img: GenteGrande },
    { nome: "Avatar", descricao: "2011", img: Avatar },
  ];
  const ListS = [
    { nome: "Peaky Blinders", descricao: "2022", img: PeakyBlinders },
    { nome: "Supernatural", descricao: "2010", img: Supernatural },
    { nome: "The Office", descricao: "2010", img: TheOffice },
    { nome: "The Last Of Us", descricao: "2023", img: Tlou },
  ];
  return (
    <>
    <div className="main">

    <div className="title">
        <h1>Filmes</h1>
        <div className="icons">
          <GoChevronLeft className="ic1"/>
          <GoChevronRight className="ic2" />
        </div>
      </div>

      <div className="filmes">
        <Filmes ListsF={ListF} />
      </div>

      <div className="title">
        <h1>Séries</h1>
        <div className="info">
        <p className="p1">1,430 </p>
        <p className="p2">Ver todos</p>
        </div>
        
        </div>
      

      <div className="series">
        <Series ListsS={ListS} />
      </div>

    
     </div>
    </>
  );
};
export default Main;
