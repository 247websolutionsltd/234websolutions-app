import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from "react-native";
import { Colors } from "../constants/theme";
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
        backgroundColor: buttonColor || Colors.primary,
      };
    } else {
      return {
        borderColor: buttonColor || Colors.secondary,
      };
    }
  };
  return (
    <TouchableOpacity
    disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        styles[type],
        handleTypeBackground(type, buttonColor),
        {opacity:disabled?0.6:1, padding:textSize || 15},
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
              : textColor || buttonColor || Colors.secondary,
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
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
});