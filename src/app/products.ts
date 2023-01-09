export interface Product {
  name: string;
  desc: string;
  preu: number;
  img: string;
  qty: number;
}

export const products= [
  {
    name:"Bola de drac",
    desc:"Primera edicio",
    preu: 10.30,
    img: "assets/images/BolaDeDrac01.jpg",
    qty: 1,
  },
  {
    name:"Narnia",
    desc:"Primera edicio",
    preu: 11.30,
    img: "assets/images/Narnia.jpg",
    qty: 1,
  },
  {
    name:"Boku no Hero Academia",
    desc:"Primera edicio",
    preu: 7.55,
    img: "assets/images/BNHA.png",
    qty: 1,
  },
  {
    name:"Los pilares de la Tierra",
    desc:"Primera edicio",
    preu: 11.30,
    img: "assets/images/PilaresTierra.png",
    qty: 1,
  },
  {
    name:"Guia Basica de Minecraft",
    desc:"",
    preu: 15.89,
    img: "assets/images/GuiaMine.png",
    qty: 1,
  },
  {
    name:"La cocina de la abuela",
    desc:"",
    preu: 18.30,
    img: "assets/images/LlibreCuina.png",
    qty: 1,
  },
  {
    name:"El señor de los anillos",
    desc:"Primera edicio",
    preu: 17.95,
    img: "assets/images/SeñorAnillos.jpg",
    qty: 1,
  },
  {
    name:"Como provocar un incendio",
    desc:"",
    preu: 9.49,
    img: "assets/images/ComoIncendiar.jpg",
    qty: 1,
  }
];
