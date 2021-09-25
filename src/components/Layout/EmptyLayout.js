import React  from 'react';
import { renderRoutes } from 'react-router-config';

const EmptyLayout = (props) => {
  const { route } = props;
  return <>{renderRoutes(route.routes)}</>;
};
export default EmptyLayout;
