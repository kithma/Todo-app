
import Card from "../layouts/Card";
import styles from "./Shared.module.css"

const ListItem = ({item, actionText, action}) => {


	return <div className={styles.itemContainer}>
			<Card>
				<div className={styles.item}>
					<div>
						<div className={styles.itemImage}>
							<img src={item.image} alt="" />
						</div>
						{item.title}
					</div>
				{actionText &&
					<button className={styles.action} onClick={action}>{actionText}</button>}
				</div>
			</Card>
		</div>
	}


export default ListItem;