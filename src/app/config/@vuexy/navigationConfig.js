import React from "react"
import {
  ArrowDownSquareFill, ArrowDownUp, ArrowLeftRight, ArrowLeftSquareFill, ArrowRightSquareFill,
  ArrowUp,
  ArrowUpSquareFill,
  Award,
  Box, BoxArrowInLeft, BoxArrowRight,
  CurrencyDollar,
  House, Inboxes, PeopleFill, CollectionFill,
  Person,
  Speedometer2, Bank
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
    groupTitle: "Akcja"
  },
  {
    id: "warehouseReceipts",
    title: 'Przyjęcia magazynowe',
    type: "item",
    icon: <BoxArrowInLeft size={20}/>,
    navLink: route['app.warehouseReceipts'],
  },
  {
    id: "warehouseReleases",
    title: 'Wydania magazynowe',
    type: "item",
    icon: <BoxArrowRight size={20}/>,
    navLink: route['app.warehouseReleases'],
  },
  {
    id: "interWarehouseTransfers",
    title: 'Przesunięcia magazynowe',
    type: "item",
    icon: <ArrowLeftRight size={20}/>,
    navLink: route['app.interWarehouseTransfers'],
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
  {
    type: "groupHeader",
    groupTitle: "Konto"
  },
  {
    id: "my-account",
    title: 'Moje konto',
    type: "item",
    icon: <Person size={20}/>,
    navLink: route['app.myAccount'],
  },
]

export default navigationConfig
