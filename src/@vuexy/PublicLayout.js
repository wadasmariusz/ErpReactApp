import React from "react";
import PropTypes from "prop-types";
import PublicFooter from "@vuexy/includes/footer/PublicFooter";
import PublicNavbar from "@vuexy/includes/navbar/PublicNavbar";
import styled from "styled-components";
import { Container } from "reactstrap";

const PublicWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PublicLayout = ({ children, fullWidth }) => {
  return (
    <PublicWrapper>
      <PublicNavbar />
      <div>{children}</div>
      <PublicFooter />
    </PublicWrapper>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

export default PublicLayout;
