import React from "react";

import IntlMessages from "util/IntlMessages";

const DashBoardPage = () => {
  console.log('running', );
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>Home page Happy Coding!</h4>
      </div>

    </div>
  );
};

export default DashBoardPage;
