"use client";

import { Link, LogOutIcon, useConfig, useTranslation } from "@payloadcms/ui";
import { formatAdminURL } from "payload/shared";

import "./LogoutNavLink.scss";

export function LogoutNavLink() {
  const { config } = useConfig();
  const { t } = useTranslation();
  const logoutURL = formatAdminURL({
    adminRoute: config.routes.admin,
    path: config.admin.routes.logout,
  });

  return (
    <div className="logout-nav-link">
      <Link href={logoutURL} prefetch={false}>
        <LogOutIcon />
        <span>{t("authentication:logOut")}</span>
      </Link>
    </div>
  );
}
