
const InventoryItem = (props) => (
    <div>
        <p>{props.itemName}</p>
        <hr style={{
            color: 'black',
        }} />
        <p>{props.itemQuantity}</p>
    </div>
);

export default InventoryItem;