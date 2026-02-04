import type { ViewStyle } from "react-native";
import { rpx } from "@/utils/responsive";

export default {
  col: {
    flexDirection: "column",
  },
  colReverse: {
    flexDirection: "column-reverse",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemsCenter: {
    alignItems: "center",
  },
  itemsEnd: {
    alignItems: "flex-end",
  },
  itemsStart: {
    alignItems: "flex-start",
  },
  itemsStretch: {
    alignItems: "stretch",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  wrap: {
    flexWrap: "wrap",
  },
  /* Sizes Layouts */
  flex_1: {
    flex: 1,
  },
  fullHeight: {
    height: "100%",
  },
  fullWidth: {
    width: "100%",
  },
  minHeight48: {
    minHeight: rpx(48),
  },
  /* Positions */
  absolute: {
    position: "absolute",
  },
  bottom0: {
    bottom: 0,
  },
  left0: {
    left: 0,
  },
  relative: {
    position: "relative",
  },
  right0: {
    right: 0,
  },
  top0: {
    top: 0,
  },
  z1: {
    zIndex: 1,
  },
  z10: {
    zIndex: 10,
  },
} as const satisfies Record<string, ViewStyle>;
