
export const selectFakeElementKey = (groupName, elementName, elementKey) =>(
  ({fakeDb}) => (
    fakeDb?.[groupName]?.[elementName]?.[elementKey] ?? null
  )
)
