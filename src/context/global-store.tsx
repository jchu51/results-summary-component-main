import React, { ReactNode, createContext, useContext } from "react";

export interface CategoryDetails {
  category: string;
  score: number;
  icon: string;
  color: string;
}

export interface IGlobalStoreContext {
  summaryResult: CategoryDetails[];
}

export const GlobalStoreContext = createContext({} as IGlobalStoreContext);

export const GlobalStoreProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: IGlobalStoreContext;
}) => {
  return (
    <GlobalStoreContext.Provider value={value}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const GlobalStoreConsumer = ({
  children,
}: {
  children: (context: IGlobalStoreContext) => ReactNode;
}) => {
  return (
    <GlobalStoreContext.Consumer>
      {(context) => {
        if (context === null) {
          throw new Error(
            "GlobalStoreConsumer must be used within a GlobalStoreProvider"
          );
        }
        return children(context);
      }}
    </GlobalStoreContext.Consumer>
  );
};

export const useGlobalStore = () => {
  const context = useContext(GlobalStoreContext);

  if (context === null) {
    throw new Error("useGlobalStore must be used within a GlobalStoreProvider");
  }
  return context;
};
