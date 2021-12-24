import React from "react"
import {Award, CurrencyDollar, House, Person, Speedometer2} from "react-bootstrap-icons";
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
    groupTitle: "Gołębie"
  },
  {
    id: "pigeon",
    title: 'Gołębie',
    type: "item",
    icon: <Award size={20}/>,
    navLink: route['app.pigeons'],
  },
  {
    id: "warehouses",
    title: 'Magazyny',
    type: "item",
    icon: <House size={20}/>,
    navLink: route['app.warehouses'],
  },
  {
    id: "pigeonNotices",
    title: 'Oferty',
    type: "item",
    icon: <CurrencyDollar size={20}/>,
    navLink: route['app.pigeonNotices'],
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
