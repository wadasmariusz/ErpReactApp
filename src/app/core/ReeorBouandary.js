import React from "react";
import {Link} from "react-router-dom";
import QueryError from "components/QueryError";
import {withRouter} from "react-router-dom";
import {sendBugReport} from "app/core/crud/core/global/sendBugReport";
import {APP_VERSION} from "app/config/env";
import {route} from "app/router/urls/routes";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.lastPath = React.createRef('');
    this.errorReportSent = React.createRef('');
  }

  static getDerivedStateFromError(error) { // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillUpdate(_prev, nextProps) {
    if(!nextProps?.hasError) {
      this.lastPath.current = this.props.location.pathname;
    }
  }

  async componentDidCatch(error, errorInfo) { // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    const err = {
      message: error?.message,
      screenWidth: window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth,
      screenHeight: window?.innerHeight|| document?.documentElement?.clientHeight|| document?.body?.clientHeight,
      language: navigator?.language,
      userAgent: navigator?.userAgent,
      appVersion: parseInt((APP_VERSION??0)*1000),
      url: this.props?.location?.pathname,
      prevUrl: this?.lastPath?.current,
      file: error?.fileName,
      details: JSON.stringify({
        columnNumber: error?.columnNumber,
        lineNumber: error?.lineNumber,
        platform: navigator?.platform,
        cookieEnable: navigator?.cookieEnabled,
        screenWidth: window?.screen?.width,
        screenHeight: window?.screen?.height,
      })
    };
    if(!this.errorReportSent.current) {
      this.errorReportSent.current = true;
      try {
        await sendBugReport(err);
      } catch (err) {
        console.error('Failed to send bug report')
      }
    }
  }
  render() {
    if (this.state.hasError)
      return (
        <div className="m-20">
          <QueryError isError isLoading={false} noButton>
            <a href={route['/']}>
              <button className="btn btn-light mt-4 px-10 btn-lg">Strona główna</button>
            </a>
          </QueryError>
        </div>
      )
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
