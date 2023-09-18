import { Characteristic } from './index'

const db = [
    {
        name: "1",
        value: [{
            name: "UPSTREAM",
            value: "12"
        }, {
            name: "DOWNSTREAM",
            value: "1000"
        }]
    },
    {
        name: "2",
        value: [{
            name: "UPSTREAM",
            value: "1000"
        }, {
            name: "DOWNSTREAM",
            value: "1000"
        }]
    }
]

export const UPSTREAM = async (characteristics: Characteristic[]): Promise<Characteristic[]> => {
    return []
}

export const DOWNSTREAM = async (characteristics: Characteristic[]): Promise<Characteristic[]> => {
    const upstreamValue = characteristics.find(char => char.name === "UPSTREAM")?.value
    const downstreamValue = characteristics.find(char => char.name === "DOWNSTREAM")?.value

    const theprofile = db.find(profile =>
        profile.value.some(entry => entry.name === "UPSTREAM" && entry.value === upstreamValue) &&
        profile.value.some(entry => entry.name === "DOWNSTREAM" && entry.value === downstreamValue)
    )
    if (theprofile) {
        return [{ name: "PROFILE", value: theprofile.name }]
    }
    throw new Error('No matching entry')
}

export const LINE_IDENTIFIER = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    return [{
        name: "LINE_ID",
        value: characteristic.value
    }]
}

export const PROFILE = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    const output = db.find(entry => entry.name === characteristic.value)

    if (output) {
        return output.value
    }

    throw new Error('No matching entry')
}

export const LINE_ID = async (characteristic: Characteristic): Promise<Characteristic[]> => {
    return [{
        name: "LINE_IDENTIFIER",
        value: characteristic.value
    }]
}
