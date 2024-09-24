import { Product, columns, data } from "./data"

import MainTable from "./data-table"


async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return data;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className=" min-h-svh bg-black py-10 px-4 md:px-12">
      <MainTable columns={columns} data={data} />
    </div>
  )
}
