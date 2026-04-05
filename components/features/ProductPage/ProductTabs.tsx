'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IProduct } from '@/types/product.interface'
import { useState } from 'react'

type Props = {
  data: IProduct
}

export default function ProductTabs({ data }: Props) {
  const [activeTab, setActiveTab] = useState('description')
  
  return (
    <div className="py-8">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <p>{data?.description}</p>
        </TabsContent>
        <TabsContent value="reviews">
          <p>Отзывы</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
