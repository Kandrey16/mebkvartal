export interface IAttributeGroup {
  id: number
  name: string
  attributes: IAttribute[]
}

export interface IAttribute {
  id: number
  name: string
  attributeGroupId?: number
  values: IAttributeValue[]
}

export interface IAttributeValue {
  id: number
  value: string
  slug: string
  attributeId?: number
}
