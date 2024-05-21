import styles from "./styles.module.css";

const Table = ({ idatas }) => {
     let total_sale=0;
     let sold=0;
     let not_sold=0;
      let mon="";
    idatas.forEach(idata => {
               if(idata.sold==="true"){
                sold+=1;
                total_sale+=parseInt(idata.price);
               }
               else{
                not_sold+=1;
               }
               mon=idata.month;
            });
    return (
        <div className={styles.container}>
             <h1>Statistics  {mon}  </h1>
             <p>Total Sale   {total_sale}</p>
             <p>Total Sold Items  {sold}</p>
             <p>Total Not Sold Items {not_sold} </p>

        </div>
    );
};
export default Table;