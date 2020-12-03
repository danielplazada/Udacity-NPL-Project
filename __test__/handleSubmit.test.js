import { handleSubmit } from "../src/client/js/formHandler"
import { getData } from "../src/client/js/formHandler"

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    return getData("http://api.meaningcloud.com/summarization-1.0?key=", "", 5, 'tedfgxt', "").then(data => {
      expect(data.summary).toEqual('dfg')
    })
  })
})