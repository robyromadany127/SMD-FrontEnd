import { Container } from "@/components";
import { useEffect } from "react";
import MemoizedFormattedMessage from "react-intl/src/components/message";

export default function HomePage() {
  const textFromEnv = import.meta.env.VITE_TESTING_TEXT;
  useEffect(() => {
    document.title = "SMD" + " - " + "Dashboard";
  }, []);
  return (
    <Container>
      <div className="flex gap-5 bg-red-100">
        <div>
          <MemoizedFormattedMessage id="dashboard" />
        </div>
        <div>
          <text href="">{textFromEnv}</text>
        </div>
      </div>
    </Container>
  );
}
