const Notes = () => {
  const notes = [
    {
    id:1,
    label:'This text is not valid S should be capital.',
    value:'xpath'
  },
    {
    id:2,
    label:'How can i make question using this keyword?',
    value:'xpath'
  },
    {
    id:3,
    label:'How to use React zod API?',
    value:'xpath'
  },
    {
    id:4,
    label:'API integration is missing.',
    value:'xpath'
  },
]
  return (

    <ul>
    {notes.map((item)=>
    <li>{item.label}</li>
  )}
  </ul>

  )
}

export default Notes