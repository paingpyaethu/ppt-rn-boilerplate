import { Paths } from "@/navigation/paths";

export type HomeStackParamList = {
  [Paths.Home]: undefined;
  [Paths.Details]: { id: string };
};
