import React, { useRef, useState } from 'react'

enum Operadores { sumar, restar, multiplicar, dividir }

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();


    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {

        // no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // pundo decimal
            if (numeroTexto === '.') {

                setNumero(numero + numeroTexto);

                // evaluar si es otro cero, y hay punto
            } else if (numeroTexto === '0' && numero.includes('.')) {

                setNumero(numero + numeroTexto);

                // evaluar si es diferente de 0 y no tiene un punto (.)
            } else if (numeroTexto !== '0' && !numero.includes('.')) {

                setNumero(numeroTexto);

                // evitar el 000.00
            } else if (numeroTexto === '0' && !numero.includes('.')) {

                setNumero(numero);

            }

        } else {

            setNumero(numero + numeroTexto);

        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const borrarNumero = () => {
        let negativo = '';
        let numeroTemp = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length <= 1) {
            setNumero('0');
        } else {
            setNumero(negativo + numeroTemp.slice(0, -1));
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        }

        setNumeroAnterior(numero);
        setNumero('0');
    }

    const botonDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const botonMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const botonRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const botonSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {

        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        if ( numero1 !== 0 && numero2 !== 0 ) {

            switch (ultimaOperacion.current) {

                case Operadores.sumar:
                    setNumero(`${numero1 + numero2}`);
                    break;
                case Operadores.restar:
                    setNumero(`${numero2 - numero1}`);
                    break;
                case Operadores.multiplicar:
                    setNumero(`${numero1 * numero2}`);
                    break;
                case Operadores.dividir:
                    setNumero(`${numero2 / numero1}`);
                    break;
    
            }
    
            setNumeroAnterior('0');

        } else {

            limpiar();

        }

        



    }

    return {
        numeroAnterior,
        numero,
        limpiar,
        armarNumero,
        positivoNegativo,
        borrarNumero,
        botonDividir,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular
    }

}
