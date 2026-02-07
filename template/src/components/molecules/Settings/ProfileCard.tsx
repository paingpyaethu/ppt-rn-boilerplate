import React from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { Text, Card, IconByVariant } from "@/components/atoms";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "@/hooks/language/schema";

type ProfileCardProps = {
  isDark: boolean;
};

const ProfileCard = ({ isDark }: ProfileCardProps) => {
  const { gutters, layout, colors, backgrounds, borders } = useTheme();
  const { t } = useTranslation();
  const { language } = useI18n();

  return (
    <Card variant="elevated" style={[gutters.marginBottom_24]}>
      <View style={[layout.row, layout.itemsCenter, gutters.gap_16]}>
        <View
          style={[
            layout.justifyCenter,
            layout.itemsCenter,
            backgrounds.purple100,
            borders.rounded_16,
            { width: 56, height: 56 },
          ]}
        >
          <IconByVariant
            path="fire"
            stroke={colors.purple500}
            width={28}
            height={28}
          />
        </View>
        <View style={[layout.flex_1]}>
          <Text
            size="size_18"
            weight="semiBold"
            fontFamily={SupportedLanguages.EN_EN}
          >
            RN Boilerplate
          </Text>
          <Text size="size_12" color="gray400" style={[gutters.marginTop_4]}>
            <Text
              size="size_12"
              color="gray400"
              fontFamily={SupportedLanguages.EN_EN}
            >
              {isDark ? "Dark Mode" : "Light Mode"} ·{" "}
            </Text>
            <Text size="size_12" color="gray400" fontFamily={language}>
              {language === SupportedLanguages.EN_EN
                ? t("common.EN")
                : t("common.MM")}
            </Text>
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default ProfileCard;
