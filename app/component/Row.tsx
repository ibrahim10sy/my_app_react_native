import { View, ViewProps,ViewStyle } from "react-native";

type Props = ViewProps & {
    gap?: number;
}

export default function Row({ gap, style, ...props }: Props) {
    return <View style={[style,rowStyle, gap ? {gap:gap} : undefined]} {...props} />
}

const rowStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    
    // justifyContent: 'space-between',
} satisfies ViewStyle