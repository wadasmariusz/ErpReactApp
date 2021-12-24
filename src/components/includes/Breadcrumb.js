import React from 'react';
import {Breadcrumb as BreadcrumbBootstrap, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {route} from "app/router/urls/routes";
import Helmet from "components/includes/Helmet";
import {defaultTitle} from "app/config/metaTags";
import {House} from "react-bootstrap-icons";


export const Breadcrumb = ({items = [], children }) => {
  const title = items.length===0 ? null : items[items.length-1].label;
  return (
    <>
      {title && <Helmet title={defaultTitle(title)} />}
      <div className="d-flex justify-content-between align-items-center pt-2">
        <BreadcrumbBootstrap listClassName="m-0">
          <BreadcrumbItem>
            <Link to={route['app.dashboard']}> <House size={14}/> </Link>
          </BreadcrumbItem>
          {items.map(({label, url}, i) => (
            <BreadcrumbItem key={i}>
              {url ? (
                <Link to={url}>
                  {label}
                </Link>
              ) : (
                label
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbBootstrap>
        <div className="px-2 d-flex">
          {children}
        </div>
      </div>
    </>
  );
};
