import { useTheme } from "@/hooks/use-theme";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from "react-native";
import { ThemedText } from "./themed-text";

type Type = "primary" | "secondary";

interface props extends ViewProps {
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
  type?: Type;
  isLoading?: boolean;
  disabled?: boolean;
  textSize?: number;
}

export default function Button({
  onPress,
  buttonColor,
  textColor,
  type = "primary",
  isLoading = false,
  style,
  disabled,
  textSize,
  ...props
}: props) {
  const handleTypeBackground = (
    type: string,
    buttonColor: string | undefined,
  ) => {
    if (type === "primary") {
      return {
        backgroundColor: buttonColor || theme.primary,
      };
    } else {
      return {
        borderColor: buttonColor || theme.secondary,
      };
    }
  };
  const theme = useTheme();
  return (
    <TouchableOpacity
    disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        
        handleTypeBackground(type, buttonColor),
        {opacity:disabled?0.6:1, 
          padding:textSize || 15, 
          backgroundColor:theme[type],
          borderWidth:type === 'secondary' ? 1 : 0
        },
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size={23} />
      ) : (
        <ThemedText
          style = {{
            color: type === "primary"
              ? textColor || "#FFF"
              : textColor || buttonColor || theme.secondary,
            fontSize: textSize || 16
          }}
          {...props}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
  },
});