export interface Characteristic {
    name: string
    value: string
}

export type CharacteristicsMapper = (
    characteristics: Characteristic[],
    supplier: string
) => Promise<Characteristic[]>

export const mapGatewayCharacteristics: CharacteristicsMapper = async (characteristics, supplier) => {
    let output: Characteristic[] = []
    for (let i = 0; i < characteristics.length; i++) {
        const current = characteristics[i]
        const { name } = current
        const supplierVars = await import(`./${supplier}.ts`)
        if (name === "DOWNSTREAM" || name === "UPSTREAM") output = output.concat(await supplierVars[name](characteristics))
        else output = output.concat(await supplierVars[name](current))
    }
    return output
}

export const mapSupplierCharacteristics: CharacteristicsMapper = async (characteristics, supplier) => {
    let output: Characteristic[] = []
    for (let i = 0; i < characteristics.length; i++) {
        const current = characteristics[i]
        const { name } = current
        const supplierVars = await import(`./${supplier}.ts`)
        output = output.concat(await supplierVars[name](current))
    }
    return output
}
