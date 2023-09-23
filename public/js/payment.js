

const update= async (pId, payment)=>
{
    try{
        const res = await axios ({

            method:'PATCH',
            url:'/webHackers/user/payment',
            data :{
                pId, payment}
        })

         console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.payment--form').addEventListener('submit',e=>{
    e.preventDefault();
   const pId= document.getElementById('pId').value;
   const payment= document.getElementById('payment').value;
   console.log(pId,payment);
update(pId,payment);
window.alert("payment  successfull")
});






