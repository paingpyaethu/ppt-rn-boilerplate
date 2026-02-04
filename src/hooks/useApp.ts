import { useEffect, useState } from "react";
import { useFreeRasp } from "freerasp-react-native";
import { freeRaspConfig } from "@/security/freerasp/freeRaspConfig";
import { Alert } from "react-native";
import { exitApp } from "@/native/ExitApp";
import { IS_PROD } from "@/utils/common";

const useApp = () => {
  const [readyToUse, setReadyToUse] = useState(true);
  const [securityMessages, setSecurityMessages] = useState<string[]>([]);

  // To use modal instead of Alert here, we would need to lift the state up to App.tsx.
  useEffect(() => {
    if (securityMessages.length > 0) {
      setReadyToUse(false);
      Alert.alert("Warning", securityMessages.join("\n"), [
        { text: "OK", onPress: exitApp },
      ]);
    }
  }, [securityMessages]);

  useFreeRasp(
    freeRaspConfig,
    IS_PROD
      ? {
          privilegedAccess: () => {
            setSecurityMessages(prev => [
              ...prev,
              "Device is broken. Privileged access is detected.",
            ]);
          },
          appIntegrity: () => {
            setSecurityMessages(prev => [
              ...prev,
              "Application integrity is compromised.",
            ]);
          },
          simulator: () => {
            setSecurityMessages(prev => [
              ...prev,
              "Device is not supported. Emulator is detected.",
            ]);
          },
        }
      : {
          // In non-prod builds, we skip security checks.
          privilegedAccess: () => {},
          appIntegrity: () => {},
          simulator: () => {},
        },
  );

  return { isReady: readyToUse };
};

export default useApp;
