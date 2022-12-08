import slugify from 'slugify'

const slugifyName = (name: string): string => {
  return slugify(name, { lower: true })
}

export default slugifyName
