import React from 'react';
import { View, Text, Image } from 'react-native';

const DiscountPage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.barcodeImage}
                source={require('../assets/barcode.png')}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    discountText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    barcodeImage: {
        width: 400,
        height: 200,
    },
};

export default DiscountPage;