function List({ onHandleClick, users }) {
	const onOpenDetail = (e) => {
	  onHandleClick(e.target.dataset.id, e.target.innerHTML);
	};
	return (
	  <ul className="main__list">
		{users.map((item) => (
		  <li className="main__list-item" onClick={onOpenDetail} data-id={item.id} key={item.id}>
			{item.name}
		  </li>
		))}
	  </ul>
	);
}

export default List;