import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import { FaUsers } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import {PAYTIFY_ROUTE} from "../../pages/Modules/Payify/constant";
import {CUSTOMERS_ROUTE} from "../../pages/CustomerPage/constant";
import {SHIPIFY_ROUTE} from "../../pages/Modules/Shipify/constant";
import {NOTIFY_ROUTE} from "../../pages/Modules/Notify/constant";
import {ACCOUNTIFY_ROUTE} from "../../pages/Modules/Accountify/constant";
import {DASHBOARD_ROUTE} from "../../pages/DashBoard/constant";

const SidebarContent = () => {

  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);
  const showSideBarTitle =  navStyle !== NAV_STYLE_MINI_SIDEBAR;

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (<>

      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">
            <Menu.Item key="sample">
              <Link to={DASHBOARD_ROUTE}>
                <MdDashboard className="icon" />
                {showSideBarTitle && <IntlMessages id="sidebar.dashboard"/>}
              </Link>
            </Menu.Item>
          </Menu>
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">
            <Menu.Item key="sample">
              <Link to={CUSTOMERS_ROUTE}>
                <FaUsers className="icon" />
                {showSideBarTitle && <IntlMessages id="sidebar.users-page"/>}
              </Link>
            </Menu.Item>
          </Menu>
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link to={PAYTIFY_ROUTE}>
                <i className="icon icon-widgets"/>
                <IntlMessages id="sidebar.module-payify"/></Link>
            </Menu.Item>
          </Menu>
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link to={SHIPIFY_ROUTE}><i className="icon icon-widgets"/>
                {showSideBarTitle && <IntlMessages id="sidebar.module-shipify"/>}
              </Link>
            </Menu.Item>
          </Menu>
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link to={NOTIFY_ROUTE}><i className="icon icon-widgets"/>
                {showSideBarTitle && <IntlMessages id="sidebar.module-notify"/>}
              </Link>
            </Menu.Item>
          </Menu>
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link to={ACCOUNTIFY_ROUTE}><i className="icon icon-widgets"/>
                {showSideBarTitle && <IntlMessages id="sidebar.module-accountify"/>}
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

