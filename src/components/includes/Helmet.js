import React from 'react';
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types";

const Helmet = (
  {
    title,
    description,
    meta:customMeta = {},
    image,
  }
) => {

  const meta = {
    description,
    'og:title': title,
    'og:description': description,
    'og:type': `website`,
    'og:image': image,
    'twitter:card': `summary`,
    'twitter:creator': 'Devcodi',
    'twitter:title': title,
    'twitter:description': description,
    ...customMeta, // overwrite some rules if required
  };

  return (
    <MetaTags>
      <title>{title}</title>
      {Object.keys(meta).map(key => key && <meta
        key={key}
        name={key}
        content={meta[key]}
      />)}
    </MetaTags>
  );
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.objectOf(
    PropTypes.string,
  ),
}

export default Helmet;
