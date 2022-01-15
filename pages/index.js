import Head from "next/head"
import ListItem from "../components/list-item/list-item"


import styles from "../styles/index.module.scss"

export default function Index() {
    const list = [
        {name: "boo"}, 
        {name: "hoo"}
    ]
    
    function printList(list) {
        
        let result = []
        
        for (const item of list) {
            result.push(<ListItem item = {item} />)
        }
        
        return result
    }
    
	return (
		<>
			<Head>
				<title>Wishlist</title>
				<meta name="description" content="Make a wishlist to organise present-giving!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.container}>
                <div className={styles.topSection}>
                    <h1 className={styles.title}>
                        Wishlist
                    </h1>
                </div>
                
                <div className={styles.mainSection}>
                    {printList(list)}
                </div>
                
            </main>
		</>
	)
}
