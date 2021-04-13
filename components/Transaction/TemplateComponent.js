import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import utils from "../../src/helper/utils";

class TemplateComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { templates } = this.props;
        return (
            <ScrollView
                style={styles.container}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {templates.map((template) => {
                    return (
                        <TouchableOpacity
                            key={template.id}
                            onPress={() => this.props.navigatePayCodeDetail() }
                        >
                            <View style={styles.itemContainer}>
                                <View style={styles.itemBody}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: template.img }}
                                    >
                                    </Image>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text>{template.providerName}</Text>
                                        <Text style={{ fontSize: 12 }}>{template.createDate}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 14, marginLeft: 10 }}>Giá : {utils.formatNumber(template.price)}đ</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10
    },
    itemBody: {
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 1
    },
    image: {
        width: 60,
        height: 40,
        resizeMode: 'stretch'
    },

});

export default TemplateComponent;
