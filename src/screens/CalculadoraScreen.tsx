import React from 'react'
import { View, Text } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        borrarNumero,
        botonDividir,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer } >

            {
                numeroAnterior !== '0'
                &&
                <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
            }

            <Text style={ styles.resultado } numberOfLines={ 1 } adjustsFontSizeToFit >{ numero }</Text>

            <View style={styles.fila} >
                <BotonCalc texto='C' color='#9b9b9b' accion={limpiar} />
                <BotonCalc texto='+/-' color='#9b9b9b' accion={positivoNegativo} />
                <BotonCalc texto='del' color='#9b9b9b' accion={borrarNumero} />
                <BotonCalc texto='/' color='#2764ff' accion={botonDividir} />
            </View>

            <View style={styles.fila} >
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='X' color='#2764ff' accion={botonMultiplicar} />
            </View>

            <View style={styles.fila} >
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='#2764ff' accion={botonRestar} />
            </View>

            <View style={styles.fila} >
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='#2764ff' accion={botonSumar} />
            </View>

            <View style={styles.fila} >
                <BotonCalc texto='0' ancho accion={armarNumero} />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='#2764ff' accion={calcular} />
            </View>
        </View>
    )
}
