import React from "react"
import "../../../@assets/scss/components/app-loader.scss"

const Spinner = ({isRelative}) => {
  return (
    <div className={`fallback-spinner ${isRelative ? 'position-relative pt-1 pb-4' : ''}`}>
      <div className={`loading component-loader ${isRelative ? 'mt-0 top-0' : ''}`}>
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
    </div>
  );
}

export default Spinner
