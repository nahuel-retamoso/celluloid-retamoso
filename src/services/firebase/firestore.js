import { db } from ".";
import { getDoc, doc, getDocs, collection, query, where, writeBatch, documentId, addDoc} from 'firebase/firestore'

export const getProducts = (category) => {

    return new Promise((resolve, reject) => {

        const collectionRef = category.id  ?
            query(collection(db, 'ItemCollection'), where('type', '==', category.id)) :
            collection(db, 'ItemCollection')

        getDocs(collectionRef).then(
            response => { const products = response.docs.map(doc => { return { id: doc.id, ...doc.data()}})
            resolve(products)
    }).catch(error => {
        reject(error)
    })
    })
}

export const createOrder = ( cart, deleteCart, objOrder ) => {

    return new Promise((resolve, reject) => {
  
            const ids = cart.map(prod => prod.id)
    
            const batch = writeBatch(db)
    
            const outOfStock = []
    
            const collectionRef = collection(db, 'ItemCollection')
    
            getDocs(query(collectionRef, where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach(doc => {
                        const dataDoc = doc.data()
                        const prodQuantity = cart.find(prod => prod.id === doc.id)?.parentcount
    
                        if(dataDoc.stock >= prodQuantity) {
                            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                        } else {
                            outOfStock.push({ id: doc.id, ...dataDoc})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        const collectionRef = collection(db, 'orders')
                        return addDoc(collectionRef, objOrder)
                    } else {
                        return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                    }
                }).then(({ id }) => {
                    batch.commit()
                    deleteCart()
                    console.log('success',`El id de la orden es: ${id}`)
                    resolve(`El id de la orden es: ${id}`)
                }).catch(error => {
                    reject(error,`Algunos productos no tienen stock`)
                })
            
        
    })

}



export const getProduct = (product) => {

    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'ItemCollection', product.id)).then(response => {
            const product = { id: response.id, ...response.data()}
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    })
    
}