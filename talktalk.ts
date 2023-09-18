import { Characteristic } from './index'

export const PROFILE = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    return [characteristic]
}

export const LINE_ID = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    return [characteristic]
}
