import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const {padding, color, normalize } = theme;

const styles = StyleSheet.create({
    category:{
        // height: 100,
        paddingHorizontal: padding * 3,
        paddingVertical: padding * 3,
        borderRadius: 15,
        marginBottom: 8,
        // borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    categoryText:{
        fontSize: normalize(16),
        fontWeight: "600",
        color: color.white,
        textAlign: "center"
    }
});


export default styles;