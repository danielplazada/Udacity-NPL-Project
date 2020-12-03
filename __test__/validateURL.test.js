import { validateURL } from "../src/client/js/validateURL"

describe ('check Name', () => {
    test ('Testing URL', () => {
        const url='http://api.meaningcloud.com/'
        expect (validateURL(url)).toBe(true)
    })
})