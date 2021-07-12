import noData from './state';
import { makePropertiesFilters } from '../_util';
import { v1 as uuid } from 'uuid';

export default class{
  constructor(props){
    this.builderId = props._id;
    this.office = {
      typeId: props.user ? "user" : "office",
      id: props.user ? props.user : props.office,
      name: props.email,
      email: props.email,
      address: props.address,
      phone: props.phone,
      mobile: props.movil,
      lat: props.lat ?  props.lat : '0',
      lng: props.lng ? props.lng : '0',
    };

    this.main = {
      primaryColor: props.primaryColor,
      secondaryColor: "#ffffff",
      favicon: "",
      logo:{
        isImage: props.logo ? true : false,
        value: props.logo,
      },
      logoDark:{
        isImage: props.logoDark ? true : false,
        value: props.logoDark ? props.logoDark : '/logo-dark.svg',
      },      
    };

    this.home = {
      hero:{
        visible: true,
        title: props.home.hero.title || noData.home.hero.title,
        background: props.home.hero.background || noData.home.hero.background,
      },
      properties:{
        visible: true,
        title: props.home.properties.title || noData.home.properties.title,
        footer: props.home.properties.footer || noData.home.properties.footer,
        bannerImage: "",
        buttonText: props.home.properties.buttonText || noData.home.properties.buttonText,
        items: props.home.properties.items || noData.home.properties.items,
      },
      about:{
        banner:{
          visible: true,
          image: props.home.about.banner.image || noData.home.about.banner.image,
          title: props.home.about.banner.title || noData.home.about.banner.title,
          subTitle: props.home.about.banner.subTitle || noData.home.about.banner.subTitle,
          buttonText: props.home.about.banner.buttonText || noData.home.about.banner.buttonText,
        },
      },
      services:{
        visible: true,
        items: props.home.services.items || noData.home.services.items,
      },
      reviews:{
        visible: true,
        items: props.home.reviews.items || noData.home.reviews.items,
      },
      contact:{
        visible: true,
        title: "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.",
        buttonText: "contacto"
      },
    }
    this.about = {
      ...props.about,
      history:{
        ...props.about.history,
        background: props.about.history.background ? props.about.history.background : '/about-hero.jpg',
      },
      hero:{
        ...props.about.hero,
        background: props.about.hero.background || '/about-hero.jpg',
      },
      description:{
        ...props.about.description,
        background: "/about-description.jpg",
      },
      stats:{
        items:{
          years:{
            value: props.about.stats.years || 50,
            meta: "Años en el mercado",
          },
          transactions:{
            value: props.about.stats.transactions || 500,
            meta: "Ventas y arriendos anuales",
          },
          properties:{
            value: props.about.stats.properties || 1000,
            meta: "Propiedades en administración",
          },
          proffesionals:{
            value: props.about.stats.proffesionals || 70,
            meta: "Profesionales",
          },          
        }
      }
    };
    this.paginateProperties = props.paginateProperties;
    this.singleProperty = {
      mainImage: "/property/main.jpg",
      images: [
        "/property/main.jpg",
        "/property/1.jpg",
        "/property/2.jpg",
        "/property/3.jpg",
        "/property/4.jpg",
        "/property/5.jpg",
      ],
      publicObservations: "Esta es la descripción púbica hecha pr el usuario donde pone lo que quiera poner. Hermosa Casa en lomas verdes, con 3 pisos. Aqui vivio drew Barirmore durante su corta estadia en Chile.",
      operation: "Arriendo",
      code: "EB092734",
      title: "Casa en Santiago de Chile",
      currency: "UF",
      value: "75.000",
      ubication:{
        region: "Rosario",
        commune: "Casorra alzamona",
        location:{
          coordinates: ["0", "0"],
        }
      },
      characteristics:[
        {
          type: "GENERAL",
          id: uuid(),
          name: "Casa",
          icon: "House"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Precio",
          icon: "Price"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Construida el 12/06/98",
          icon: "Building"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Sup. Construida 100m2",
          icon: "Surface"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Sup. Total 180m2",
          icon: "Surface"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Baños 2",
          icon: "Bath"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Venta",
          icon: "Sale"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Balcon",
          icon: "Balcony"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Habitaciones 3",
          icon: "Rooms"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Pisos 2",
          icon: "Floor"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Estacionamientos",
          icon: "Parking"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Gasto común 0",
          icon: "Spending"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Calefación",
          icon: "Heating"
        },
        {
          type: "OTHERS",
          id: uuid(),
          name: "Baño de Servicio",
          icon: "Extra"
        },
        {
          type: "OTHERS",
          id: uuid(),
          name: "Calefacción central",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Balcón",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Cerca a areas verdes",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Sist. de alarma",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Seguridad 24 hs",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Cuarto de servicio",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Pátio",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Piscina",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Chimenea",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Área verde",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Terraza",
          icon: "Extra"
        },                                                                               
      ]
      ,
      relatedUser:{
        id: uuid(),
        firstName: "Adrian",
        lastName: "Carcamo",
        description: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
        avatar: "/team-member-1.jpg",
        email:"acarcamo@clasihome.cl",
        phone: "+56 9 5555 5555",
        jobTitle: "Ejecutivo comercial"
      },
    };
  }

  static makeFilters = (filters) => {
    let url = '';
    let i = 0;
    console.log("MAKE FILTES", filters)
    for(let key in filters){
      i++;
      if(filters[key] === "all"){
        continue;
      }
      const more = i !== 1 ? '&' : ''; 
      url = url + more + `${key}=${filters[key]}`;
    }
    return url;
  }

  static paginateProperties = (filters)=> new Promise(async(resolve, reject) => {
    try{
      const url = makePropertiesFilters(filters);
      console.log("URLO URL ", url);
      const data = await fetch(url);
      const result = await data.json();
      console.log("URLO URL RESULT", result);
      resolve(result);
    }catch(e){
      console.log("paginateProperties error:", e);
      reject(e)
    }
  });
}