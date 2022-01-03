import React from "react"
import {
  ArrowDownSquareFill, ArrowDownUp, ArrowLeftRight, ArrowLeftSquareFill, ArrowRightSquareFill,
  ArrowUp,
  ArrowUpSquareFill,
  Award,
  Box, BoxArrowInLeft, BoxArrowRight,
  CurrencyDollar,
  House, Inboxes,
  Person,
  Speedometer2
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
    type: "groupHeader",
    groupTitle: "Magazyn"
  },
  {
    id: "warehouses",
    title: 'Magazyny',
    type: "item",
    icon: <House size={20}/>,
    navLink: route['app.warehouses'],
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
    groupTitle: "Stare"
  },
  {
    id: "pigeonNotices",
    title: 'Oferty',
    type: "item",
    icon: <CurrencyDollar size={20}/>,
    navLink: route['app.pigeonNotices'],
  },
  {
    id: "pigeon",
    title: 'Gołębie',
    type: "item",
    icon: <Award size={20}/>,
    navLink: route['app.pigeons'],
  },
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
