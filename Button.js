import { Text, TouchableOpacity,} from 'react-native';
import styles from "./styleSheet"
const Button = ({ backgroundColor, title, color, fontSize, minWidth }) => {
    return (
      <TouchableOpacity
        key={title}
        style={[styles.button, { backgroundColor: backgroundColor, minWidth: minWidth }]}
        onPress={() => { handleInput(title) }}>
        <Text style={[styles.textButton, { color: color, fontSize: fontSize }]}>{title}</Text>
      </TouchableOpacity>
    )
  }
  export default Button