import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export class ProviderComponent extends Component {

    constructor() {
        super();

    }
    render() {
        const { providers, providerSelected } = this.props;

        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {providers.map((provider) => {
                    return (
                        <TouchableOpacity
                            onPress={() => this.props.chooseProvider(provider.code)}
                            key={provider.code}
                        >
                            <View style={providerSelected == provider.code ? styles.providerActive : styles.providerDefault}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: provider.img }}
                                >
                                </Image>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

        )
    }

}


const styles = StyleSheet.create({
    providerDefault: {
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5,
        padding: 2
    },
    providerActive: {
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5,
        padding: 2,
        borderColor: '#009e0f'
    },
    image: {
        width: 90,
        height: 50,
        resizeMode: 'stretch'
    }
});

export default ProviderComponent
