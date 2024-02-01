import { View, Text } from "react-native"

export default function RowText (props) {
    const { bodyText1, bodyText2, viewStyles, bodyTextStyle1, bodyTextStyle2 } = props
    return (
        <View style={viewStyles} >
          <Text style={bodyTextStyle1}>{bodyText1}</Text>
          <Text style={bodyTextStyle2}>{bodyText2}</Text>
        </View>
    )
}
