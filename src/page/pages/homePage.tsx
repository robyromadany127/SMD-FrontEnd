import { Container } from "@/components";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";

export default function HomePage() {
  const appAlias = import.meta.env.VITE_APP_ALIAS || "SMD";

  const intl = useIntl();

  useEffect(() => {
    document.title = `${appAlias} - Dashboard`;
  }, [appAlias]);
  return (
    <Fragment>
      <Container></Container>
    </Fragment>
  );
}
