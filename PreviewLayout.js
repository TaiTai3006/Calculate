import { Text, TouchableOpacity, View } from 'react-native';
import styles from "./styleSheet"
const PreviewLayout = ({
    values,
    selectedValue,
    setSelectedValue,
    navigation
  }) => (
    <View>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {
              setSelectedValue('Calculate')
              navigation.navigate(value)
            }}
            style={[
              styles.button1,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  export default PreviewLayout