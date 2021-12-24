
export const selectFakeGroup = (groupName) => (
  ({fakeDb}) => (
    fakeDb?.[groupName]
  )
)
