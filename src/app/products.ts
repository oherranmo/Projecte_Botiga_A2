export interface Product {
  id: number;
  name: string;
  desc: string;
  preu: number;
  img: string;
}

export const products= [
  {
    id: 1,
    name:"Bola de drac",
    desc:"Primera edicio",
    preu: 10.30,
    img: "assets/images/BolaDeDrac01.jpg"
  },
  {
    id: 2,
    name:"Narnia",
    desc:"Primera edicio",
    preu: 11.30,
    img: "assets/images/Narnia.jpg"
  },
  {
    id: 3,
    name:"Boku no Hero Academia",
    desc:"Primera edicio",
    preu: 7.55,
    img: "assets/images/BNHA.png"
  },
  {
    id: 4,
    name:"Los pilares de la Tierra",
    desc:"Primera edicio",
    preu: 11.30,
    img: "assets/images/PilaresTierra.png"
  },
  {
    id: 5,
    name:"Guia Basica de Minecraft",
    desc:"",
    preu: 15.89,
    img: "assets/images/GuiaMine.png"
  },
  {
    id: 6,
    name:"La cocina de la abuelaa",
    desc:"",
    preu: 18.30,
    img: "assets/images/LlibreCuina.png"
  },
  {
    id: 7,
    name:"El señor de los anillos",
    desc:"Primera edicio",
    preu: 17.95,
    img: "assets/images/SeñorAnillos.jpg"
  },
  {
    id: 8,
    name:"Como provocar un incendio",
    desc:"",
    preu: 9.49,
    img: "assets/images/ComoIncendiar.jpg"
  }
];
