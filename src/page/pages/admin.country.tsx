import { Container } from "@/components";
import { Toolbar, ToolbarActions, ToolbarHeading } from "@/layout/demo6";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import MemoizedFormattedMessage from "react-intl/src/components/message";
import { Link } from "react-router-dom";
import { NetworkAppRosterContent } from "../network/user-table/app-roster";

export default function AdminCountryPage() {
  const appAlias = import.meta.env.VITE_APP_ALIAS || "SMD";

  const intl = useIntl();

  useEffect(() => {
    document.title = `${appAlias} - Admin - Country`;
  }, [appAlias]);

  return (
    <Fragment>
      <Toolbar>
        <ToolbarHeading />
        <ToolbarActions>
          <Link to="/admin/country/create" className="btn btn-sm btn-primary">
            <MemoizedFormattedMessage id="addCountry" />
          </Link>
        </ToolbarActions>
      </Toolbar>
      <Container>
        <NetworkAppRosterContent />
      </Container>
    </Fragment>
  );
}
