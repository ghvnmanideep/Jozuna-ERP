import React, { createContext, useContext, useState } from "react";
import CommonAlertComponent from "../component/CommonAlert";

interface AlertOptions {
  message: string;
  onYes: () => void;
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [message, setMessage] = useState("");
  const [yesCallback, setYesCallback] = useState<() => void>(() => { });
  const [isOpen, setIsOpen] = useState(false);

  const showAlert = ({ message, onYes }: AlertOptions) => {

    setMessage(message);
    setYesCallback(() => onYes);
    setIsOpen(true);

  };

  const closeAlert = () => {
    setIsOpen(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>

      {children}

      {isOpen && (
        <CommonAlertComponent
          message={message}
          buttonCallBack={yesCallback}
          onClose={closeAlert}
        />
      )}

    </AlertContext.Provider>
  );
};

export const useAlert = () => {

  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert must be used inside AlertProvider");
  }

  return context;
};