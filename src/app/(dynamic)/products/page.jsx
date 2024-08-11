import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export const metadata = {
  title: "Hexashop - Products",
  description: "Welcome,tlob w tmanna!!",
};



export default async  function Products() {
  const data = await getData()
  const products = data.products;
  
  return (
    <div className={styles.mainContainer}>
      { 
        products.map(products=>(
          <Link href={`/products/${products.id}`} className={styles.post} key={products.id}> 
            <div className={styles.imageContainer}>
              <Image 
                className={styles.image}
                src={products.thumbnail}
                fill={true}
                alt="post image"/> 
            </div>
            <div className={styles.content}>
                    <h2 className={styles.title}> {products.title} </h2>
                    <p  className={styles.text}> {products.description}</p> 
            </div>
          </Link>

        ))
      }
    </div>
  )
}
