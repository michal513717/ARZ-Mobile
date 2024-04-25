import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Text } from 'react-native';

export default function App() {
    return (
        <GluestackUIProvider config={config}>
            <Text>Hello world</Text>
        </GluestackUIProvider>
    );
}
