

export const selectFakeElement = (groupName, elementName) =>(
  ({fakeDb}) => (
    fakeDb?.[groupName]?.[elementName]
  )
)
