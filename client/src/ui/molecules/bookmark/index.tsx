import React from "react";
import { useUserData } from "../../../user-context";
import { Doc } from "../../../document/types";

const App = React.lazy(() => import("./app"));

export const BookmarkToggle = ({ doc }: { doc: Doc }) => {
  const userData = useUserData();
  const isServer = typeof window === "undefined";
  if (isServer || !userData || (userData && !userData.isSubscriber)) {
    return null;
  }
  return (
    <React.Suspense fallback={null}>
      <App doc={doc} />
    </React.Suspense>
  );
};