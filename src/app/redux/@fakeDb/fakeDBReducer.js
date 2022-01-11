import {
  A__FAKE_DB_EDIT,
  A__FAKE_DB_REMOVE,
  A__FAKE_DB_SET,
} from "app/redux/@fakeDb/actionTypes/types";
import { reducerFakeElementSet } from "app/redux/@fakeDb/reducers/reducer_elementSet";
import { reducerFakeElementEdit } from "app/redux/@fakeDb/reducers/reducer_elementEdit";
import { reducerFakeElementRemove } from "app/redux/@fakeDb/reducers/reducer_elementRemove";

const initialState = () => ({
  units: {
    one: {
      id: "one",
      description: "Okreg Biała Podlaska",
      pageUrl: "http://example.com",
      name: "Biała Podlaska",
      subdivisions: [
        {
          id: "07",
          name: "Biała Podlaska 07",
          subdivisions: [
            {
              name: "Sekcja 1",
            },
            {
              name: "Sekcja 2",
            },
            {
              name: "Sekcja 3",
            },
            {
              name: "Sekcja 4",
            },
          ],
        },
        {
          id: "07",
          name: "Ł-S-K Łuków 0468",
        },
        {
          id: "07",
          name: "Łosice 0385",
        },
        {
          id: "07",
          name: "Międzyrzec Podlaski 0391",
        },
        {
          id: "07",
          name: "Parczew 08",
        },
        {
          id: "07",
          name: "Podlasie 0441",
        },
        {
          id: "07",
          name: "Radzyń Podlaski 09",
        },
        {
          id: "07",
          name: "Siedlce 0414",
        },
        {
          id: "07",
          name: "Sokołowsko - Węgrowski 010",
        },
      ],
    },
  },
  pigeons: {
    one: {
      id: "one",
      ringNumber: "A1234",
      name: "Staszek",
      gender: { id: 1, name: "samiec" },
      year: "2018",
      hatchingDate: "02-03-2018",
      status: { name: "ok" },
      description: "gołąb Staszek",
      eyeColor: { name: "czerwony" },
      color: "czerwony",
      breed: "brodawczak",
      father: "two",
      mother: "three",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      photoUrl:
        "https://image.freepik.com/darmowe-zdjecie/zamknij-sie-golab-siedzi-na-skale_209690-366.jpg",
    },
    two: {
      id: "two",
      ringNumber: "A1220",
      name: "Jurek",
      gender: { id: 1, name: "samiec" },
      year: "2014",
      hatchingDate: "08-02-2014",
      status: { name: "ok" },
      description: "gołąb",
      eyeColor: { name: "czerwony" },
      color: "czerwony",
      breed: "kurak",
      father: "-",
      mother: "four",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      photoUrl:
        "https://ipla.pluscdn.pl/dituel/cp/rv/rv2acay7ak2ofc3452vz3xtuaiy2k7sk.jpg",
    },
    three: {
      id: "three",
      ringNumber: "A1120",
      name: "Basia",
      gender: { id: 2, name: "samiec" },
      year: "2014",
      hatchingDate: "08-02-2014",
      status: { name: "ok" },
      description: "gołąb czarny",
      eyeColor: { name: "brązowy" },
      color: "czarny",
      breed: "turkot",
      father: "-",
      mother: "-",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      photoUrl: "https://bi.im-g.pl/im/07/07/dd/z14485255V,Golab.jpg",
    },
    four: {
      id: "four",
      ringNumber: "A1120",
      name: "Asia",
      gender: { id: 2, name: "samiec" },
      year: "2010",
      hatchingDate: "08-02-2010",
      status: { name: "ok" },
      description: "gołębica",
      eyeColor: { name: "brązowy" },
      color: "czarny",
      breed: "turkot",
      father: "-",
      mother: "-",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      photoUrl:
        "https://cdn.galleries.smcloud.net/t/galleries/gf-wPvK-TGec-o2SD_golab-1920x1080-nocrop.jpg",
    },
    five: {
      id: "five",
      ringNumber: "A1120",
      name: "Asia",
      gender: { id: 2, name: "samiec" },
      year: "2010",
      hatchingDate: "08-02-2010",
      status: { name: "ok" },
      description: "gołębica",
      eyeColor: { name: "brązowy" },
      color: "czarny",
      breed: "turkot",
      father: "-",
      mother: "-",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Pigeon_shot.jpg",
    },
  },
  me: {
    userId: 1,
    userRoles: [],
    firstName: "Jan",
    lastName: "Kowalski",
    token: "tokenTestowy",
    nick: "Testowy",
    profilePhotoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png",
    URLFacebook: "https://facebook.com",
    URLInstagram: "https://instagran.com",
    URLWebsite: "https://example.com",
    URLYoutube: "https://youtube.com",
    contactEmail: "contact@devcodi.com",
    contactPhone: "+48123456789",
    address: "ul. Jana Pawła II 00-867 Warszawa",
    descriptionShort: "Użytkownik Testowy",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    birthDate: "20-02-1997",
    email: "biuro@mansard.pl",
    phoneNo: "500 400 435",
  },
  events: {
    one: {
      id: "one",
      name: "Event 1",
      description: "Lorem Ipsum etc.",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTAAktxlVzXjBkM0HAk8xeduSlSdAsozXdw&usqp=CAU",
    },
    two: {
      id: "two",
      name: "Event 2",
      description: "Lorem Ipsum etc. event 2",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7DD7B_gzW9WOWgcjKAzh2KcukVon43htsg&usqp=CAU",
    },
    three: {
      id: "three",
      name: "Event 3",
      description:
        "Lorem Ipsum etc. event C. Lorem Ipsum etc. event C.Lorem Ipsum etc. event C.Lorem Ipsum etc. event C.Lorem Ipsum etc. event C.Lorem Ipsum etc. event C. ",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0K903cgc06xYxckxuDjnGqOetOCjHJeoOQ&usqp=CAU",
    },
  },
  lost: {
    one: {
      id: "one",
      ringNumber: "A1234",
      name: "Staszek",
      gender: { id: 1, name: "samiec" },
      year: "2018",
      hatchingDate: "02-03-2018",
      status: { name: "ok" },
      description: "gołąb Staszek",
      eyeColor: { name: "czerwony" },
      color: "czerwony",
      breed: "brodawczak",
      father: "two",
      mother: "three",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      date: "2021-10-13",
    },
    two: {
      id: "two",
      ringNumber: "A1220",
      name: "Jurek",
      gender: { id: 1 },
      year: "2014",
      hatchingDate: "08-02-2014",
      status: { name: "ok" },
      description: "gołąb",
      eyeColor: { name: "czerwony" },
      color: "czerwony",
      breed: "kurak",
      father: "-",
      mother: "four",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      date: "2021-10-13",
    },
    three: {
      id: "three",
      ringNumber: "A1120",
      name: "Basia",
      gender: { id: 2 },
      year: "2014",
      hatchingDate: "08-02-2014",
      status: { name: "ok" },
      description: "gołąb czarny",
      eyeColor: { name: "brązowy" },
      color: "czarny",
      breed: "turkot",
      father: "-",
      mother: "-",
      dovecote: "",
      fancier: {
        userId: 1,
        firstName: "Jan",
        lastName: "Kowalski",
        contactEmail: "contact@devcodi.com",
        contactPhone: "+48123456789",
      },
      date: "2021-10-13",
    },
  },
  market: {
    one: {
      id: "one",
      price: 1299,
      priceCurrency: {
        symbol: "zł",
      },
      pigeon: {
        id: "one",
        ringNumber: "A1234",
        name: "Staszek",
        gender: { id: 1, name: "samiec" },
        year: "2018",
        hatchingDate: "02-03-2018",
        status: { name: "ok" },
        description: "gołąb Staszek",
        eyeColor: { name: "czerwony" },
        color: { name: "czerwony" },
        breed: { name: "brodawczak" },
        father: "two",
        mother: "three",
        dovecote: "",
        fancier: {
          userId: 1,
          firstName: "Jan",
          lastName: "Kowalski",
          contactEmail: "contact@devcodi.com",
          contactPhone: "+48123456789",
        },
        photoUrl:
          "https://image.freepik.com/darmowe-zdjecie/zamknij-sie-golab-siedzi-na-skale_209690-366.jpg",
      },
    },
    two: {
      id: "two",
      price: 2400,
      priceCurrency: {
        symbol: "zł",
      },
      pigeon: {
        id: "two",
        ringNumber: "A1220",
        name: "Jurek",
        gender: { id: 1, name: "samiec" },
        year: "2014",
        hatchingDate: "08-02-2014",
        status: { name: "ok" },
        description: "gołąb",
        eyeColor: { name: "czerwony" },
        color: { name: "czerwony" },
        breed: { name: "kurak" },
        father: "-",
        mother: "four",
        dovecote: "",
        fancier: {
          userId: 1,
          firstName: "Jan",
          lastName: "Kowalski",
          contactEmail: "contact@devcodi.com",
          contactPhone: "+48123456789",
        },
        photoUrl:
          "https://ipla.pluscdn.pl/dituel/cp/rv/rv2acay7ak2ofc3452vz3xtuaiy2k7sk.jpg",
      },
    },
    three: {
      id: "three",
      price: 500,
      priceCurrency: {
        symbol: "€",
      },
      pigeon: {
        id: "three",
        ringNumber: "A1120",
        name: "Basia",
        gender: { id: 2, name: "samica" },
        year: "2014",
        hatchingDate: "08-02-2014",
        status: { name: "ok" },
        description: "gołąb czarny",
        eyeColor: { name: "brązowy" },
        color: { name: "czarny" },
        breed: { name: "turkot" },
        father: "-",
        mother: "-",
        dovecote: "",
        fancier: {
          userId: 1,
          firstName: "Jan",
          lastName: "Kowalski",
          contactEmail: "contact@devcodi.com",
          contactPhone: "+48123456789",
        },
        photoUrl:
          "https://telewizjarepublika.pl/imgcache/786x400/c/uploads/news/homing-pigeon-2727563_1920.jpg",
      },
    },
    four: {
      id: "four",
      price: 8500,
      priceCurrency: {
        symbol: "₴",
      },
      pigeon: {
        id: "four",
        ringNumber: "A1234",
        name: "Włodek",
        gender: { id: 1, name: "samiec" },
        year: "2018",
        hatchingDate: "02-03-2018",
        status: { name: "ok" },
        description: "gołąb Staszek",
        eyeColor: { name: "czerwony" },
        color: { name: "czerwony" },
        breed: { name: "brodawczak" },
        father: "two",
        mother: "three",
        dovecote: "",
        fancier: {
          userId: 1,
          firstName: "Jan",
          lastName: "Kowalski",
          contactEmail: "contact@devcodi.com",
          contactPhone: "+48123456789",
        },
        photoUrl:
          "https://cdn.galleries.smcloud.net/t/galleries/gf-wPvK-TGec-o2SD_golab-1920x1080-nocrop.jpg",
      },
    },
    five: {
      id: "five",
      price: 2100,
      priceCurrency: {
        symbol: "zł",
      },
      pigeon: {
        id: "five",
        ringNumber: "A1220",
        name: "Hubert",
        gender: { id: 1, name: "samiec" },
        year: "2014",
        hatchingDate: "08-02-2014",
        status: { name: "ok" },
        description: "gołąb",
        eyeColor: { name: "czerwony" },
        color: { name: "czerwony" },
        breed: { name: "kurak" },
        father: "-",
        mother: "four",
        dovecote: "",
        fancier: {
          userId: 1,
          firstName: "Jan",
          lastName: "Kowalski",
          contactEmail: "contact@devcodi.com",
          contactPhone: "+48123456789",
        },
        photoUrl:
          "https://www.rmfmaxxx.pl/scratch/staticImages/a0/d76/a0d7695e3cb92d2a.jpg",
      },
    },
  },
  __totalNo__: 0,
});

export const fakeDbReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case A__FAKE_DB_SET:
      return reducerFakeElementSet(state, payload);
    case A__FAKE_DB_EDIT:
      return reducerFakeElementEdit(state, payload);
    case A__FAKE_DB_REMOVE:
      return reducerFakeElementRemove(state, payload);
    default:
      return state;
  }
};
