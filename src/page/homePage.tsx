import { Container } from "@/components";
import { useEffect } from "react";
import MemoizedFormattedMessage from "react-intl/src/components/message";

export default function HomePage() {
  useEffect(() => {
    document.title = "SMD" + " - " + "Dashboard";
  }, []);
  return (
    <Container className=" max-h-[90vh] min-h-[80vh] overflow-y-auto">
      <div className="flex-col ">
        <MemoizedFormattedMessage id="dashboard" />
      </div>
    </Container>
  );
}
