import ShopDetails from '@/components/shop-details'

const page = ({params}) => {
  console.log(params.slug)
  return (
    <>
      <ShopDetails slug={params.slug}/>
    </>
  )
}

export default page
