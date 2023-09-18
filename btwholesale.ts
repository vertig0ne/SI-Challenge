import { Characteristic } from './index'

export const PROFILE = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    const name = 'LINE_PROFILE'
    const value = `ABC/${characteristic.value}`
    const output = { name, value }
    return [output]
}

export const LINE_ID = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    return [characteristic]
}

export const LINE_PROFILE = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    const name = 'PROFILE'
    const value = characteristic.value.replace('ABC/', '')
    return [{ name, value }]
}
