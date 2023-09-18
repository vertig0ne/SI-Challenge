import { describe, expect, test } from '@jest/globals';
import { mapGatewayCharacteristics, mapSupplierCharacteristics } from './index';

describe('mapSupplierCharacteristics', () => {
    test('can map gateway to btwholesale characteristics', () => {
        const supplier = "btwholesale"
        const input = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        const expectedResult = [
            {
                name: "LINE_PROFILE",
                value: "ABC/1"
            },
            {
                name: "LINE_ID",
                value: "12345"
            }
        ]

        for (const expected of expectedResult) {
            expect(mapSupplierCharacteristics(input, supplier)).resolves.toContainEqual(expected);
        }
    })

    test('can map gateway to cityfibre characteristics', () => {
        const supplier = "cityfibre"
        const input = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        const expectedResult = [
            {
                "name": "LINE_IDENTIFIER",
                "value": "12345"
            },
            {
                "name": "UPSTREAM",
                "value": "12"
            },
            {
                "name": "DOWNSTREAM",
                "value": "1000"
            }
        ]

        for (const expected of expectedResult) {
            expect(mapSupplierCharacteristics(input, supplier)).resolves.toContainEqual(expected);
        }
    })

    test('can map gateway to talktalk characteristics', () => {
        const supplier = "talktalk"
        const input = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        const expectedResult = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        for (const expected of expectedResult) {
            expect(mapSupplierCharacteristics(input, supplier)).resolves.toContainEqual(expected);
        }
    })

})

describe('mapSupplierCharacteristics', () => {
    test('can map cityfibre to gateway characteristics', () => {
        const supplier = "cityfibre"
        const input = [
            {
                "name": "LINE_IDENTIFIER",
                "value": "12345"
            },
            {
                "name": "UPSTREAM",
                "value": "12"
            },
            {
                "name": "DOWNSTREAM",
                "value": "1000"
            }
        ]

        const expectedResult = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        for (const expected of expectedResult) {
            expect(mapGatewayCharacteristics(input, supplier)).resolves.toContainEqual(expected);
        }
    })

    test('can map talktalk to gateway characteristics', () => {
        const supplier = 'talktalk'
        const input = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        const expectedResult = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        for (const expected of expectedResult) {
            expect(mapGatewayCharacteristics(input, supplier)).resolves.toContainEqual(expected);
        }
    })

    test('can map btwholesale to gateway characteristics', () => {
        const supplier = 'btwholesale'
        const input = [
            {
                name: "LINE_PROFILE",
                value: "ABC/1"
            },
            {
                name: "LINE_ID",
                value: "12345"
            }
        ]

        const expectedResult = [
            {
                name: "LINE_ID",
                value: "12345"
            },
            {
                name: "PROFILE",
                value: "1"
            }
        ]

        for (const expected of expectedResult) {
            expect(mapGatewayCharacteristics(input, supplier)).resolves.toContainEqual(expected);
        }   
    })
})
