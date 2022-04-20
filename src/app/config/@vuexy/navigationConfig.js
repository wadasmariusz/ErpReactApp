import React from "react"
import {
  ArrowLeftRight,
  Box,
  BoxArrowInLeft,
  BoxArrowRight,
  Inboxes,
  PeopleFill,
  CollectionFill,
  Speedometer2,
  Bank,
  Basket,
  Circle,
  Wrench,
  Palette,
  Palette2,
  PaletteFill,
  ArrowBarLeft,
  ArrowLeftCircle, ArrowRightCircle, BoxSeam, Square
} from "react-bootstrap-icons";
import {route} from "app/router/urls/routes";


const navigationConfig = (t = () => '') => [
  {
    id: "home",
    title: 'Dashboard',
    type: "item",
    icon: <Speedometer2 size={20}/>,
    navLink: route['app.dashboard'],
  },

  {
    type: "groupHeader",
    groupTitle: "Magazyny"
  },
  {
    id: "warehouses",
    title: 'Magazyny',
    type: "item",
    icon: <Bank size={20}/>,
    navLink: route['app.warehouses'],
  },

  {
    type: "groupHeader",
    groupTitle: "Produkty"
  },
  {
    id: "product",
    title: 'Produkty',
    type: "item",
    icon: <Box size={20}/>,
    navLink: route['app.products'],
  },
  {
    id: "coil",
    title: 'Kręgi',
    type: "item",
    icon: <Circle size={20}/>,
    navLink: route['app.coils'],
  },
  {
    id: "sheet",
    title: 'Blachy',
    type: "item",
    icon: <Square size={20}/>,
    navLink: route['app.sheets'],
  },
  {
    id: "productKind",
    title: 'Rodzaje',
    type: "item",
    icon: <Inboxes size={20}/>,
    navLink: route['app.productKinds'],
  },
  {
    id: "productCategory",
    title: 'Kategorie',
    type: "item",
    icon: <CollectionFill size={20}/>,
    navLink: route['app.productCategories'],
  },

  {
    type: "groupHeader",
    groupTitle: "Produkcja"
  },

  {
    id: "productionSheets",
    title: 'Cięcie kregów',
    type: "item",
    icon: <Palette2 size={20}/>,
    navLink: route['app.productionSheets'],
  },


  {
    type: "groupHeader",
    groupTitle: "Zewnętrzne"
  },
  {
    id: "warehouseReceipts",
    title: 'Przyjęcia zewnętrzne',
    type: "item",
    icon: <BoxArrowInLeft size={20}/>,
    navLink: route['app.warehouseReceipts'],
  },
  {
    id: "warehouseReleases",
    title: 'Wydania zewnętrzne',
    type: "item",
    icon: <BoxArrowRight size={20}/>,
    navLink: route['app.warehouseReleases'],
  },

  {
    type: "groupHeader",
    groupTitle: "Wewnętrzne"
  },
  {
    id: "interWarehouseReceipts",
    title: 'Przyjęcia wewnętrzne',
    type: "item",
    icon: <ArrowLeftCircle size={20}/>,
    navLink: route['app.interWarehouseReceipts'],
  },
  {
    id: "interWarehouseReleases",
    title: 'Rozchód wewnętrzny',
    type: "item",
    icon: <ArrowRightCircle size={20}/>,
    navLink: route['app.interWarehouseReleases'],
  },

  {
    id: "interWarehouseTransfers",
    title: 'Przesunięcia wewnętrzne',
    type: "item",
    icon: <ArrowLeftRight size={20}/>,
    navLink: route['app.interWarehouseTransfers'],
  },

  {
    type: "groupHeader",
    groupTitle: "Panel obsługi"
  },

  {
    id: "orders",
    title: 'Zamówienia',
    type: "item",
    icon: <Basket size={20}/>,
    navLink: route['app.orders'],
  },


  {
    type: "groupHeader",
    groupTitle: "Dane systemowe"
  },
  {
    id: "users",
    title: 'Użytkownicy',
    type: "item",
    icon: <PeopleFill size={20}/>,
    navLink: route['app.users'],
  },

  // {
  //   id: "pigeonNotices",
  //   title: 'Oferty',
  //   type: "item",
  //   icon: <CurrencyDollar size={20}/>,
  //   navLink: route['app.pigeonNotices'],
  // },
  // {
  //   id: "pigeon",
  //   title: 'Gołębie',
  //   type: "item",
  //   icon: <Award size={20}/>,
  //   navLink: route['app.pigeons'],
  // },


  // {
  //   type: "groupHeader",
  //   groupTitle: "Konto"
  // },
  // {
  //   id: "my-account",
  //   title: 'Moje konto',
  //   type: "item",
  //   icon: <Person size={20}/>,
  //   navLink: route['app.myAccount'],
  // },
]

export default navigationConfig
